const db = require('./database');

//------------------------------------------GET-------------------------------

//trazer tudo
const getAllUsers = async() => {
    return await db.executeQuery('SELECT * FROM tb_usuario');
};

//trazer por id
// const findUserByLogin = async(req) => {
//     return await db.executeQuery('SELECT * FROM tabela WHERE id = ' + req.params.id);
// }

//----------------------------------------POST-----------------------------------
//inserir
const createUser = async(body) => {
    await db.executeQuery(
        `INSERT INTO tb_usuario(nome, nome_social, email, sexo, cpf_cnpj, dt_nascimento, senha)
         VALUES('${body.nome}',
                '${body.nomeSocial}',
                '${body.email}',
                '${body.sexo}',
                '${body.cpf_cnpj}',
                '${body.dt_nascimento}',
                '${body.senha}')`);
    return {Response: `O usuario ${body.nome} foi criado com sucesso!!`};
}

//---------------------------------------PUT--------------------------------------
//alterar
const updateUser = async(req, res) =>{
    await db.executeQuery(
        `UPDATE tb_usuario set 
        nome='${req.body.nome}',
        nome_social='${req.body.nomeSocial}',
        email='${req.body.email}',
        sexo='${req.body.sexo}',
        cpf_cnpj='${req.body.cpf_cnpj}',
        dt_nascimento='${req.body.dt_nascimento}',
        senha='${req.body.senha}'
        WHERE id_usuario = ${req.params.id}`);
    return {Response: 'usuario alterado!'};
}
//-------------------------------------DELETE------------------------------------
//apagar
const deleteUser = async(id) =>{
    return await db.executeQuery('DELETE FROM tb_usuario WHERE id_usuario = ' + id);
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    // findUserByLogin
};