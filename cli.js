#!/usr/bin/env node

const opn = require('opn')

const getParams = process.argv[2]
const opts = { wait: false }

// Sorry to track you

if (getParams === 'blog' || getParams === '--blog') {
  opn('https://108kb.io/blog/?utm_source=npx', opts)
} else {
  opn('https://108kb.io/?utm_source=npx', opts)
}
