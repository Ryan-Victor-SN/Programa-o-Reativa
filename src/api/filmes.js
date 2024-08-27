const express = require('express');
const router = express.Router();
const {filmes} = require('../models');
const FilmeService = require('../services/filmes');

const filmeService = new FilmeService(filmes);

router.get('/buscar', async (req, res) =>{
    const{nome, ano, avaliacao, datalancamento} = req.body
    try{
        const resultados = await filmeService.BuscaFiltrada({nome, ano, avaliacao, datalancamento})
        res.json(resultados);
    }catch (erro){
        res.status(400).send(erro.message)
    }
})

module.exports = router;