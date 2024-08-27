const { Op } = require('sequelize');

class FilmeService{
    constructor (FilmeModel){
        this.filmes = FilmeModel
    }

    async BuscaFiltrada({ nome_filme, avaliacao, data_lancamento }){
        try{
            const condicoes = {};

            if (nome_filme !== null && nome_filme !== undefined) {
                condicoes.nome_filme = { [Op.iLike]: `%${nome_filme}%` }; 
            }
    
            if (avaliacao !== null && avaliacao !== undefined) {
                condicoes.avaliacao = avaliacao; // Busca por data exata
            }
    
            if (data_lancamento !== null && data_lancamento !== undefined) {
                condicoes.data_lancamento = data_lancamento; // Busca por status exato
            }

            const filmes = await this.filmes.findAll({
                where: condicoes,
            });

        return filmes

        } catch(erro){
            console.error(erro.message)
            throw erro
        }
    }
}

module.exports = FilmeService