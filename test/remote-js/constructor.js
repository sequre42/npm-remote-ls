const test = require('tehanu')(__filename)
const { ok } = require('assert')
const { RemoteLS } = require('@sequre42/npm-remote-ls')

test('accepts old logger', () => {
  const ls = new RemoteLS({
    logger: { log: () => { } }
  })
  ok(ls.logger)
  ok(ls.logger.debug)
  ok(ls.logger.error)
})
