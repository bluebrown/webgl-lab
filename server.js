const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
})

fastify.listen(3000, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})