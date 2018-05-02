const { test } = require('tap')
const { fastify } = require('../src/app')

test('GET `/v1/keep-alive` route', async t => {
  t.plan(2)
  t.tearDown(() => fastify.close())

  const res = await fastify.inject({ method: 'GET', url: '/v1/keep-alive' })

  t.strictEqual(res.statusCode, 200)
  t.equal(res.payload, 'API is alive')
})
