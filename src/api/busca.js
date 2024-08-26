const express = require('express');
const router = express.Router();

router.get('/test', async (req, res) =>{
    res.send('certo');
})

module.exports = router;