import * as assert from 'node:assert'

export namespace Assert {
  export function isTrue(value: boolean) {
    assert.strictEqual(value, true)
  }
  export function isFalse(value: boolean) {
    assert.strictEqual(value, false)
  }
  export function equal(actual: unknown, expect: unknown) {
    return assert.strictEqual(actual, expect)
  }
  export function notEqual(actual: unknown, expect: unknown) {
    return assert.notEqual(actual, expect)
  }
  export function deepEqual(actual: unknown, expect: unknown) {
    if (actual instanceof Uint8Array && expect instanceof Uint8Array) {
      assert.equal(actual.length, expect.length)
      for (let i = 0; i < actual.length; i++) assert.equal(actual[i], expect[i])
    }
    return assert.deepEqual(actual, expect)
  }
  export function throws(callback: Function) {
    try {
      callback()
    } catch {
      return
    }
    throw Error('Expected throw')
  }
  export async function throwsAsync(callback: Function) {
    try {
      await callback()
    } catch {
      return
    }
    throw Error('Expected throw')
  }
  export function isTypeOf(value: any, type: any) {
    if (typeof value === type) return
    throw Error(`Value is not typeof ${type}`)
  }
  export function isInstanceOf(value: any, constructor: any) {
    if (value instanceof constructor) return
    throw Error(`Value is not instance of ${constructor}`)
  }
}