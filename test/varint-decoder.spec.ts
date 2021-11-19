import { expect } from 'aegir/utils/chai.js'
import { Buffer } from 'buffer'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { varintDecoder } from '../src/index.js'

const types = [{
  name: 'Buffer',
  fromHexString: (hex: string) => Buffer.from(hex, 'hex')
}, {
  name: 'Uint8Array',
  fromHexString: (hex: string) => uint8ArrayFromString(hex, 'base16')
}]

types.forEach(({ name, fromHexString }) => {
  describe(`varint-decoder (${name})`, () => {
    it('decode 1 varint', () => {
      const buf = fromHexString('05')
      const arr = varintDecoder(buf)
      expect(arr[0]).to.equal(5)
    })

    it('decode 2 varints', () => {
      const buf = fromHexString('000a')
      const arr = varintDecoder(buf)
      expect(arr[0]).to.equal(0)
      expect(arr[1]).to.equal(10)
    })

    it('decode 3 varints', () => {
      const buf = fromHexString('0b0c03')
      const arr = varintDecoder(buf)
      expect(arr[0]).to.equal(11)
      expect(arr[1]).to.equal(12)
      expect(arr[2]).to.equal(3)
    })

    it('decode 1 long varint', () => {
      const buf = fromHexString('c801')
      const arr = varintDecoder(buf)
      expect(arr[0]).to.equal(200)
    })

    it('decode a mix of long and short', () => {
      const buf = fromHexString('96130208b90a')
      const arr = varintDecoder(buf)
      expect(arr[0]).to.equal(2454)
      expect(arr[1]).to.equal(2)
      expect(arr[2]).to.equal(8)
      expect(arr[3]).to.equal(1337)
    })
  })
})
