const express = require('express');
const app = express();
app.use(express.json());
const db = require("./db");
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
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

const port = process.env.PORT || 3000;
app.use('/', router);

app.listen(port,()=>{console.log(`Servidor iniciado em http://localhost:${port}`);})