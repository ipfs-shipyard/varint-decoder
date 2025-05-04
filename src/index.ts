import * as v from 'varint'

// @ts-expect-error types are wrong
const varint = v.default

export function varintDecoder (buf: Uint8Array) {
  if (!(buf instanceof Uint8Array)) {
    throw new Error('arg needs to be a Uint8Array')
  }

  const result = []

  while (buf.length > 0) {
    const num = varint.decode(buf)
    result.push(num)
    buf = buf.slice(varint.decode.bytes)
  }

  return result
}
