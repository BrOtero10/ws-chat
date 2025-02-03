const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true, // Aguarda quando o pool estiver cheio
    connectionLimit: 10,      // Limite de conexões simultâneas
    queueLimit: 0             // Sem limite na fila de espera
});

// Garante suporte a Promises para consultas assíncronas
const connection = pool.promise();

module.exports = connection;