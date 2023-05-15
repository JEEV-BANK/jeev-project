const app = require('./app')
require('dotenv').config();
//servidor 
const PORT = process.env.PORT || 8081;
app.listen(PORT,()=>{
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
})