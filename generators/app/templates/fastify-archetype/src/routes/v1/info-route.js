const schema = require('../../schemas/v1/info-schema')
const handler = require('../../handlers/v1/info-handler')

/**
 * Info routes endpoints
 *
 * @param {Fastify} fastify
 */
const routes = fastify => {
  fastify.route({
    method: 'GET',
    url: '/keep-alive',
    schema: schema.keepAlive,
    handler: handler.keepAlive
  })
}

module.exports = routes
