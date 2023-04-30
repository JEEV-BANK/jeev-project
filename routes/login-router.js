const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("login")
});

//CRUD
/*

//trazer tudo
app.get('/autor', async(req, res) =>{
    const tabela = await db.executeQuery('SELECT * FROM actor');
    res.status(200).send(tabela);
})

//trazer por id
app.get('/autor/:id?', async(req, res) => {
    const autor = await db.executeQuery('SELECT * FROM tabela WHERE id = ' + req.params.id);
    res.status(200).send(autor);
})

//inserir
app.post('/inserir', async(req, res) =>{
    const id = parseInt(req.body.id);
    const nome = req.body.nome;
    await db.executeQuery(`INSERT INTO author(id, name) VALUES('${id}', '${nome}')`);
    res.status(200).send("Inserido")
})
//apagar
app.delete('/deletar', async(req,res) =>{
    await db.executeQuery('DELETE FROM tabela WHERE id = ' + req.params.id);
    res.status(200).send("Apagado!");
})
//altera
app.put('/alterar/:id', async(req,res) =>{
    const nome = req.body.nome;
    const id = parseInt(req.params.id);
    await db.executeQuery(`UPDATE author set name='${nome} WHERE id = '${id}'`);
    res.status(200).send("Alterado")
})
*/

module.exports = router;