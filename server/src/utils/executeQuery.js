const connection = require('../config/mysql.config');

const executeQuery = async (query, variableList = []) => {
    try {
        const [results, fields] = await connection.execute(query, variableList);
        console.log(results);
        return results;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error.message);
        throw error;  // Repassa o erro para o chamador
    }
};

module.exports = executeQuery;