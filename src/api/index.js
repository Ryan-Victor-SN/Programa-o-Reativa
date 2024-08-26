 const express = require('express')

 const buscarRouter = require('./busca.js')

 const router = express.Router()

router.use('/buscar', buscarRouter)

 module.exports = router;