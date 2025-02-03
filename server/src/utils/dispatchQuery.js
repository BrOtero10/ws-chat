const sqlServerConfig = require('../config/sqlserver.config');
const sql = require("mssql");

async function dispatchQuery(sqlString, parameterList = [], targetAttribute = undefined) {
    let pool;

    try {
        pool = new sql.ConnectionPool(sqlServerConfig);
        await pool.connect();

        let request = pool.request();
        parameterList.forEach(parameter => {
            request = request.input(parameter[0], parameter[1]);
        });

        const result = await request.query(sqlString);

        if(targetAttribute !== undefined) {
            if(targetAttribute === null) return result;
            else return result[targetAttribute];
        }
        else return result.recordset;
        
    } catch (error) {
        console.log('------------------ ERRO NA REQUISIÇÃO ------------');
        console.log(`Erro na requisição: ${sqlString}`);
        console.log(`----->${error.message}`);
        console.log('------------------ FIM DO ERRO ------------\n');
    } finally {
        if(pool) await pool.close();
    }
}

module.exports = dispatchQuery;