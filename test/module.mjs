import { RemoteLS, clearCache, config, ls } from '@sequre42/npm-remote-ls'
import { strictEqual } from 'assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

test('exports all functions', () => {
  strictEqual(typeof RemoteLS, 'function')
  strictEqual(typeof clearCache, 'function')
  strictEqual(typeof config, 'function')
  strictEqual(typeof ls, 'function')
})
