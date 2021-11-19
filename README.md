varint-decoder
==============

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Coverage Status](https://coveralls.io/repos/github/ipfs-shipyard/varint-decoder/badge.svg?branch=master)](https://coveralls.io/github/ipfs-shipyard/varint-decoder?branch=master)
[![Dependency Status](https://david-dm.org/ipfs-shipyard/varint-decoder.svg?style=flat-square)](https://david-dm.org/ipfs-shipyard/varint-decoder) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![](https://img.shields.io/badge/npm-%3E%3D3.0.0-orange.svg?style=flat-square)
![](https://img.shields.io/badge/Node.js-%3E%3D4.0.0-orange.svg?style=flat-square)

> Parse all the varints in a Buffer (for when there are varints everywhere)

# Usage

## API

```JavaScript
import { varintDecoder } from 'varint-decoder'
import { Buffer } from 'buffer'

const buf = new Buffer('000110', 'hex')
const decoded = varintDecoder(buf)

console.log(decoded)
// [0, 1, 16]
```
