// Imports.
const express = require('express')
const routes = require('./routes')

// Instance.
const app = express()

const port = 3000
app.use(routes)
app.listen(port, () => console.log(`A aplicação está rodando na porta ${port}`))