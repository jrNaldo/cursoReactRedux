const port = 3002
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true})) // Para toda req que chegar, usando urlenconded, utilize o bodyParser
server.use(bodyParser.json()) // Para as req que retornam json

server.listen(port, () => console.log(`Backend rodando na porta ${port}`))

module.exports = server