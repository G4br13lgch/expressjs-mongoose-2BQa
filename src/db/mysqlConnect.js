import mysql from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config();

const params = {
    connectionLimit: 100,
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT, 
    database: process.env.MYSQL_DB_NAME,
    debug: false,
    //Esta linea se agrega para ejecutar varias declaraciones en una sola query
    //  multipleStatements: true
}

export const conexion = mysql.createPool(params);