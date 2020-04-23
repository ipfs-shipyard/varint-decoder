/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const { Buffer } = require('buffer')
const vd = require('../src')

describe('varint-decoder', () => {
  it('decode 1 varint', () => {
    const buf = Buffer.from('05', 'hex')
    const arr = vd(buf)
    expect(arr[0]).to.equal(5)
  })

  it('decode 2 varints', () => {
    const buf = Buffer.from('000a', 'hex')
    const arr = vd(buf)
    expect(arr[0]).to.equal(0)
    expect(arr[1]).to.equal(10)
  })

  it('decode 3 varints', () => {
    const buf = Buffer.from('0b0c03', 'hex')
    const arr = vd(buf)
    expect(arr[0]).to.equal(11)
    expect(arr[1]).to.equal(12)
    expect(arr[2]).to.equal(3)
  })

  it('decode 1 long varint', () => {
    const buf = Buffer.from('c801', 'hex')
    const arr = vd(buf)
    expect(arr[0]).to.equal(200)
  })

  it('decode a mix of long and short', () => {
    const buf = Buffer.from('96130208b90a', 'hex')
    const arr = vd(buf)
    expect(arr[0]).to.equal(2454)
    expect(arr[1]).to.equal(2)
    expect(arr[2]).to.equal(8)
    expect(arr[3]).to.equal(1337)
  })
})
