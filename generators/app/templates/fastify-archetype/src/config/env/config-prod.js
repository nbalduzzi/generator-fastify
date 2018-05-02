const env = {
  options: {
    logger: {
      prettyPrint: true,
      level: 'info'
    },
    https: {
      key: null, // .key file path
      cert: null // .crt file path
    }
  }
}

module.exports = env
