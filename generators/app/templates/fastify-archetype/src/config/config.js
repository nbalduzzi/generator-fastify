const { version } = require('../../package')

const env = require(`./env/config-${process.env.NODE_ENV || 'prod'}`)

const config = {
  name: 'API',
  port: process.argv[2] || 3000,
  documentation: {
    swagger: {
      info: {
        version,
        title: 'API Documentation',
        description: 'API Endpoints Documentation'
      },
      schemes: [env.options.https ? 'https' : 'http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    exposeRoute: true
  }
}

module.exports = { ...config, ...env }
