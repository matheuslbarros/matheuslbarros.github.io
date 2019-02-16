const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(express.static('assets'))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000)
  })
  .catch((error) => {
    console.error(error.stack)
    process.exit(1)
  })
