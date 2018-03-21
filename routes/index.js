const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const server = handle => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, err => {
    if (err) throw err
    console.log('> Ready on port %d', port)
  })
}

module.exports = server
