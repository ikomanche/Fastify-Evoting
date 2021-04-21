const Fastify = require('fastify')
const path = require('path')
const AutoLoad = require('fastify-autoload')
const uuidv4 = require('uuid')

const createRequestId = () => uuidv4()

const createServer = options => {
  const { logSeverity } = options

  const server = Fastify({
    ignoreTrailingSlash: true,
    logger: {
      genReqId: createRequestId,
      level: logSeverity
    }
  })

  server.register(AutoLoad, {
    dir: path.join(__dirname, 'routes')
  })

  server.register(require('fastify-cors')),
    {
      cors: true
    }

  server.listen(3000, (err, addr) => {
    if (err) {
      server.log.error(err)
      console.log(err)
      process.exit(1)
    }
    server.log.info(`Server started on ${addr}`)
  })
}

module.exports = {
  createServer
}
