const swagger = require('fastify-swagger')
const cors = require('cors')

const { name, port, options, documentation } = require('./config/config')
const { v1 } = require('./routes')

const fastify = require('fastify')(options)

// Middlewares
fastify.use(cors())
// Plugins
fastify.register(swagger, documentation)
fastify.register(v1, { prefix: '/v1' })

// Server
fastify.listen(port, '0.0.0.0', err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.swagger()
  fastify.log.info('%s listening in %s environment', name, process.env.NODE_ENV)
})

// Export fastify for testing purpose
module.exports = { fastify }
