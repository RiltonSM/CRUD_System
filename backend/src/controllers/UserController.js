const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const users = await connection('usuarios').select('*');

        return response.json(users);
    },
    async create(request, response) {
        const { nome, cpf, data_nasc, profissao, genero } = request.body;

        await connection('usuarios').insert({
            nome,
            cpf,
            data_nasc,
            profissao,
            genero
        });
        return response.send('receive');
    },
    async update(request, response){
        const { nome, cpf, profissao, genero } = request.body;

        await connection('usuarios').where('cpf', cpf).update({
            nome,
            profissao,
            genero
        });

        return response.send('Atualizado');
    },
    async delete(request, response) {
        const { id } = request.params;

        await connection('usuarios').where("id", id).delete();

        return response.status(204).send();
    }
}