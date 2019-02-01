const { mkdirSync, writeFileSync, existsSync } = require('fs')
const { resolve } = require('path')

// eslint-disable-next-line
const [farizKu, farizKuSayang, title, isDirMode] = process.argv

if (isDirMode && isDirMode !== '--dir') {
  throw Error('hmmm')
}

const targetPath = resolve(__dirname, 'src', 'pages', 'articles')

const slugify = text => {
  return text.toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '') // eslint-disable-line
    .replace(/\-\-+/g, '-') // eslint-disable-line
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

const createFile = ({ isDir = false } = {}) => {
  let target
  if (isDir) {
    target = resolve(targetPath, newFormat, 'index.md')
  } else {
    if (existsSync(resolve(targetPath, newFormat + '.md'))) {
      throw Error('file exists')
    }
    target = resolve(targetPath, newFormat + '.md')
  }
  try {
    writeFileSync(resolve(target), mdFormat)
  } catch (err) {
    throw Error(err)
  }
}

const shouldAddZero = number => number < 9 && '0'

const date = new Date()
const $date = shouldAddZero(date.getDate()) + date.getDate()
const $month = shouldAddZero(+(date.getMonth() + 1)) + +(date.getMonth() + 1)

const dateFormat = `${date.getFullYear()}-${$month}-${$date}`
const newFormat = `${dateFormat}---${slugify(title)}`
const mdFormat = `---
date: "${dateFormat}"
layout: post
title: ${title}
draft: false
path: "/${slugify(title)}/"
category: ""
tags: [""]
description: ""
---


`

// it works on my machine, yoi (v8.14.x)

if (isDirMode) {
  try {
    mkdirSync(resolve(targetPath, newFormat))
    createFile({ isDir: true })
  } catch (err) {
    throw err
  }
} else {
  createFile({ isDir: false })
}

console.log()
console.log('ok: ' + newFormat)
console.log()
