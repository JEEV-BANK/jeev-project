//modulos
const express = require('express');
const db = require("./database");
const path = require('path');

//config
const app = express();
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
app.use(express.static('public'));

//rotas
app.get("/login", (req, res) =>{
    res.render("login")
});
// app.get("/cadastro", (req, res) =>{
//     res.sendFile(__dirname + "/public/usuario/cadastro-usuario/cadastro.html")
// });

//servidor 
const port = 8081;
app.listen(port,()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
})

//public
app.use(express.static(path.join(__dirname, "public")))
