const fs = require('fs')
const path = require('path')

/**
 * Sync read routes directory for dynamic load
 *
 * @param {Fastify} fastify
 * @param {Object} opts
 * @param {Callback} next
 */
const v1 = (fastify, opts, next) => {
  const directory = path.join(__dirname, 'routes', 'v1')

  fs.readdirSync(directory).forEach(file => {
    const route = path.join(directory, file)
    require(route)(fastify)
  })

  next()
}

module.exports = { v1 }
