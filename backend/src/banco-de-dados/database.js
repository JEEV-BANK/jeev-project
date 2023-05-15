const { json } = require("express");
require('dotenv').config();

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DB;
const port = process.env.MYSQL_PORT;
async function connect() {
    if(global.connection && global.connection.state != 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");                
    const connection = await mysql.createConnection(
                //usuario:senha@localhost:porta/nome_do_database
                // "mysql://root:root@localhost:3306/sakila"
                `mysql://${user}:${password}@${host}:${port}/${database}`)
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