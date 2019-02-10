---
date: "2019-02-09"
layout: post
title: Declarative now is a thing
draft: false
path: "/declarative-now-is-a-thing/"
category: "Work"
tags: ["Fundamentals"]
description: "Does imperative spark joy?"
---

Familiar dengan istilah "deklaratif" sendiri setelah mempelajar [React](https://reactjs.org). Kesalahan terbesar tentang
pandangan gue terhadap declarative rendering di React adalah: Hanya re-render component yang state nya berubah saja.
Meskipun secara teknis React melakukan re-rendering tersebut secara deklaratif, kesalahan gue terdapat pada "hanya
re-render component yang statenya berubah saja" tentang penjelasan declarative rendering.

Sebelum kita membahas tentang deklaratif lebih lanjut, mari kita _flashback_ tentang bagaimana sebelumnya kita telah
membuat sesuatu secara deklaratif: HTML, CSS, dan MySQL. Ketiga teknologi tersebut merupakan sesuatu yang ditulis
secara deklaratif, mari gue buat contoh:

```html
<div>
  <h2>Hello World</h2>
  <button class="c-button">
    Click Me
  </button>
</div>
```

dan ini file CSS kita:

```css
.c-button {
  border: 0;
  padding: 5px 8px;
}
```

Dan ketika kita ingin mengambil data dari database (SQL-based), kita biasanya menggunakan syntax seperti ini:

```sql
SELECT * FROM `posts` LIMIT BY 10 ORDEBY_BY `published_at`
```

Yang SQL flashback banget, sudah 3 tahunan kayaknya enggak pernah nyentuh SQL lagi 😅

Oke, dari tiga contoh diatas kita menulisnya secara deklaratif. Kita tidak perlu menulis tentang _bagaimana browser
membuat heading level 2, button, dan memberikan direktif `class` ke button tersebut_, kita tidak perlu menulis tentang
_bagaimana browser menerapkan CSS ke class `c-button` dengan properti `border`, dan `padding`,_ dan kita tidak perlu
menulis bagaimana SQL Engine memberikan semua data yang ada ditable `posts` dan dilimit hanya 10 item (semoga syntaxnya
benar), dan disusun berdasarkan kolom `published_at`. Ya, kita tidak perlu menulis caranya. It just works.

## Imperative way

Agar bisa memahami lebih dalam tentang imperative vs declarative, mari kita buat cara imperativenya. Misal yang pertama
HTML. Kita ingin membuat elemen-elemen diatas menggunakan cara declarative.

```js
const div = document.createElement('div')
const heading = document.createElement('h2')
const button = document.createElement('button')

heading.textContent = 'Hello World'

button.classList.add('c-button')
button.textContent = 'Click Me'

div.appendChild(heading)
div.appendChild(button)

document.body.appendChild(div)
```

Atau CSS (styling element):

```js
const cButton = document.getElementsByClassName('.c-button')

for (let i = 0; i < cButton.length; i++) {
  cButton[i].style.border = '0px'
  cButton[i].style.padding = '5px 8px'
}
```

Atau SQL yang gak tau gimana haha. Mungkin seperti ini (pseudocode):

```js

const getPosts = getPostsFromDB()
const filteredPost = getPosts.slice(0, 10)
const orderPost = filteredPost.sort()

return orderPost
```

Yang intinya, kita menjelaskan bagaimana sesuatu tersebut melakukan sesuatu.

In React?

```js
function someComponent () {
  return (
    <div>
      <h2>Hello World</h2>
      <button className='c-button'>
        Click Me
      </button>
    </div>
  )
}
```

Yang diterjemahkan menjadi seperti ini:

```js
const someComponent = React.createElement('div', null,
  React.createElement('h2', null, 'Hello World'),
  React.createElement('button', { className: 'c-button' })
)
```

Yang sama-sama kita tidak menuliskan instruksi tentang bagaimana react me-render dan me-re-render component tersebut.

Mungkin belum terlalu kentara, ya? Bayangkan seperti ini:

```js
import React from 'react'

class SomeComponent extends React.Component {
  state = {
    shouldBeDisabled: true
  }
  render () {
    const { shouldBeDisabled } = this.state.
    return (
      <button
        className="c-button"
        disabled={shouldBeDisabled}
      >
        {shouldBeDisabled ? 'Loading' : 'Submit'}
      </button>
    )
  }
}
```

Dimana letak menariknya?

- Bagaimana anda ingin me-re-render element, tanpa kehilangan props sebelumnya?
- Bagaimana anda ingin me-re-render element, hanya "state" yang berubahnya saja?
- Bagaimana anda mengatur direktif `disabled` dibutton tersebut sesuai dengan state?
- Bagaimana anda mengatur `textContent` dari element button tersebut sesuai dengan state?

Tentu bisa dilakukan, namun dengan cara imperatif :))

Dengan menggunakan React, dia menyembunyikan hal-hal kompleks tersebut (abstraction) tanpa menghilangkan efisiensi,
developer experience, dan performa. Cool!

## Another example: Apollo Client

Apollo merupakan GraphQL client untuk membuat component yang mengambil data via GraphQL. Apollo pun menggunakan
paradigma declarative. Gue enggak membahas tentang [Relay](https://facebook.github.io/relay) karena gue sendiri belum
menggunakannya di Production.

Fikirkan tentang bagaimana kita mengambil data via REST API:

```js
fetch(SOME_URL)
  .then(_ => _.json())
  .then(res => {
    this.setState({ posts: res.data })
  })
  .catch(err => this._showError(err))
```

Lalu di UI/component kita seperti ini:

```js
{this.state.posts.map(post => {
  return (
    <div className='c-post' key={post.id}>
      <Post data={post} />
    </div>
  )
})
```

Yang berarti, kita harus mengatur:

- Error state
- Loading state
- Paginasi
- Caching
- Combining previous state

Secara manual! Dengan Apollo, kita bisa melakukannya seperti ini misalnya:

```js
const Posts = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (error) return <Error />
      if (loading || !data) return <Loading />

      return <Post data={data.posts} />
    }}
  </Query>
)
```

Dan fungsionalitas paginasi, caching, dan penggabungan dengan data sebelumnya pun sudah dilakukan under the hood :))


## Closer to the Functional

Functional paradigm/programming merupakan salah satu contoh sesuatu yang deklaratif. Bisa kita ambil dari fungsi
`.filter()`:

```js
const anotherArray = [1,3,5,7,8,20,21,22,27]
const someArray = anotherArray.filter(anArray => anArray % 2 !== 0)

console.log(someArray) // [1,3,5,7,21,27] (kalau gak salah ya)
```

Apakah kita menjelaskan tentang bagaimana cara kita mem-filter? Tidak, kan? Bagaimana dengan ini:

```js
const anotherArray = [1,3,5,7,8,20,21,22,27]
let someArray = []

anotherArray.forEach(anArray => {
  if (anArray % 2 !== 0) {
    someArray.push(anArray)
  }
})

console.log(someArray) // [1,3,5,7,21,27] (kalau gak salah ya)
```

Kode diatas hanyalah suatu contoh yang sangat simple.

## Mengapa declarative?

- Easy to read
- Easy to use
- Easy to configure

Contoh selain dalam pembuatan UI, ini adalah konfigurasi deployment yang digunakan di [tarsius.id](https://tarsius.id)
untuk frontend:

```bash

$ cat ./orcinus.yml

  stack: "orcinus"
  services:
    # Set your service name
    frontend:
      # Set your image here
      # image: "registry.gitlab.com/tarsiusid/tarsius/<image-name>:<tag>"
      image: "registry.gitlab.com/tarsiusid/tarsius/frontend:latest"
      constraint: "node.role!=manager"
      auth: true
      labels:
      # Set you container port here
        traefik.port: "3000"
        traefik.docker.network: "orcinus"
        # If you want overwrite default domain
        traefik.frontend.rule: "Host:<xxx_censored>.tarsius.id"
```

Atau contoh dari Docker Compose:

```yml
version: '3'
services:
  web:
    build: .
    ports:
     - "5000:5000"
  redis:
    image: "redis:alpine"
```
Tinggal deklarasikan apa yang ingin dilakukan dan diinginkan :))

Easy to read, use, and configure.

Bayangkan ketika membuat UI seperti ini misalnya:

```yml
home:
  components:
    - Navbar
    - Posts
    - Footer
  state:
    Posts:
      - source: SOME_URL
      - label: "posts" # this.state.posts
  auth: false # is this route need auth?
```

Simsalabim, menjadi UI! Asik, kan?

Meskipun sudah ada syntax yang familiar seperti [MarkoJS](https://markojs.com/)


---

It's not easy.

Gue sudah terbiasa dengan imperative karena _easy to debug_ nya. Diproject kantor dulu, gue pernah membuat
"declarative"-ish library untuk ber-interaksi dengan API yang ada. Jadi, ketika ingin menampilkan list kelas, semudah
memanggil API `getPosts(args: Object?)`:

```js

// Show me 10 classes from category Programming order by last update

const data = KelasKitaSDK.getPosts({
  limit: 10,
  orderBy: 'last_update',
  category: 'Programming'
})

```

Maka data yang diminta akan diberikan sesuai dengan apa yang dideklarasikan! No need to think about handling errors,
filtering, validating, ordering, etc. It just works.

And need a lot more effort when I create it 😅

## Last

JavaScript is modular by design. Kita bisa membuat abstraction yang dibungkus dengan library/module. Hal yang perlu kita
ingat bahwa _Don't reinventing the wheel_, bila seseorang telah membuat methods `map()` yang memang efisien; telah
ter-optimasi, dll. Mengapa kita harus membuatnya lagi?

There is no "Zero-cost abstraction" di JavaScript. You pay what you have abstract.

Jadi, kita bisa membuat suatu program dengan deklaratif, dengan abstraksi yang dibungkus dengan module. Selain agar
reusable, memang menggunakan cara apalagi selain menjadikannya sebuah module?
