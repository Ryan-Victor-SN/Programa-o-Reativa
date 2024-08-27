 const express = require('express')

 const buscarRouter = require('./filmes.js')

 const router = express.Router()

router.use('/buscar', buscarRouter)

 module.exports = router;