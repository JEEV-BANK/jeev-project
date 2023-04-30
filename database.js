const { json } = require("express");

async function connect() {
    if(global.connection && global.connection.state != 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");                //usuario:senha@localhost:porta/nome_do_database
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/jeev_bank")
    console.log("Conectou no MySql!");
    global.connection = connection;
    return connection;
}

async function executeQuery(sql) {
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
    conn.query(sql,(error,results,fields)=>{
        if(error)
            return json(error);
        else
            return json(results);
        conn.end();
    });
}

module.exports = {executeQuery}