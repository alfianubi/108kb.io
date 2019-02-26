---
date: "2019-02-26"
layout: post
title: Why I'm enthusiast in writing test
draft: false
path: "/why-im-enthusiast-in-writing-test/"
category: "Work"
tags: ["Fundamentals"]
description: "2019 is my year for learning to writing a test!"
---

Di tahun 2019 (tahun ini) gue akan lebih sedikit mempelajari tentang Framework-specific atau
Language-specific topics (kayaknya gue pernah nulis tentang ini deh, tapi dimana ya?). Salah satunya
adalah menulis test! Gue udah lumayan familiar dengan menulis test, bahkan dibeberapa project (dan
di kantor!) gue udah menulis test, walau belum banyak.

Dan test yang baru gue tulis hanyalah Unit Test. Testing untuk suatu fungsionalitas dari yang
unit terkecil. Didunia nyata, bayangkan ketika beli hp, "spec" dari HP tersebut adalah: Tahan air,
baterai kuat selama 50 jam penggunaan normal, kamera, dll. Dan kita (SEBAGAI PEMBUAT HP) mengujinya
sebelum dipasarkan (masa nyuruh end-user nge-test sendiri fitur "tahan air" nya?)

Unit test merupakan test yang menurut gue paling gampang dilakukan. Paling memakan sedikit waktu,
dan yang pastinya, cocok dengan TDD.

## My views are changes

Dulu gue setuju dengan DHH tentang [TDD is wasting
time](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html). Tapi sekarang pemikiran berubah (ya,
people changes) meskipun gue masih setuju dengan Writing test is wasting time, tapi ada yang lebih
gue setuju lagi: Not writing test is more wasting time!

Kenapa?

Karena dalam mempelajari/membaca kode sebuah software yang dibuat oleh orang lain, kita biasanya
memulainya dengan melihat testnya (atau bahkan menjalankan test nya) agar kita tau "behavior" dari
software tersebut.

Bayangkan ketika kalian dihire diperusahaan lain, lalu disuruh membayar hutang-hutang teknikal dari
developer sebelumnya: Tanpa test, tanpa docs. Mau mulai dari mana kita?

Entrypoint!

Gimana cara kita tau behavior softwarenya?

Tinggal liat fungsi-fungsinya!

Wasting time, kan?

## Unit Test is not enough

Setelah familiar dengan Unit Test, gue *sekarang* sedang mempelajari menulis Integration Test. Dan
ini yang paling susah, karena gue sendiri menggunakan teknik
[Mocking](https://martinfowler.com/bliki/TestDouble.html). Karena ketika gue memiliki endpoint API:
`/post/new`, enggak mungkin kan gue test beneran endpoint tersebut (meskipun mungkin aja). Yang gue
perlukan adalah:

- Seolah-olah melakukan POST request ke API tersebut
- Seolah-olah mendapatkan response yang seharusnya

Mungkin kunci mocking adalah seolah-olah. Meskipun gue belum ngerti banget tentang Mocking, tapi gue
antusias banget dengan mempelajari mocking di Integration Test ini.

## E2E Is costly, but it worth.

Menulis kode e2e sangat costly. Kita membutuhkan VM (Headless/real browser), kita bergantung dengan
kondisi jaringan, dll. Tapi gue merasakan keuntungannya ketika test e2e, terlebih untuk sebuah
[software yang bergerak dibidang Real Time Communication](https://tarsius.id). We need to test from
"real" user in "real" network condition.

Jujur aja, gue enggak menulis e2e untuk sekarang. Meskipun bisa saja, tapi seperti yang sudah kalian
tau, gue ditempat ini bukan seorang "Lead", jadi harus ada proposal/request untuk menentukan sebuah
tindakan. Haha, kangen masa-masa menjadi lead yang "just fucking follow what I decide".

## Learning test is soooo expensive

Gue belum menemukan sumber belajar dalam menulis test yang murah namun berkualitas (bangsat emang
manusia, maunya murah tapi berkualitas!). Gue ingin belajar dari Kent C Dodds, namun yang paling
murah aja $49 (685,448.39 IDR). Ingin di Egghead/Frontend Masters, sekitar $39/bulan.

Melihat dari nominal angka yang masuk ke gaji gue tiap bulan, plus pengeluaran per-bulan untuk bayar
kosan dan per-tri-semester untuk bayar kuliahan, kayaknya enggak mungkin gue bisa mengeluarkan
sekitar $45+ per-bulan hanya untuk BELAJAR. Gue akan mencari alternatif yang lebih murah.

Kecuali dibayarin kantor hahaha. Belum berani bilang, belum setahun. Takut ngelunjak haha.


## Kesimpulan

Gue ingin mencoba menulis software lebih baik dengan menulis test. Dengan menulis test, kita bisa
melakukan proses refactor dengan "aman", kita bisa tau behavior dari suatu software, kita bisa tau
apa yang kita tulis, tidak hanya sebatas menulis kode yang mungkin semua developer/programmer juga
bisa.

Ok cool, wish we all luck. Semoga bisa tidur malam ini.

