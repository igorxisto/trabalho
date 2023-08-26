async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function useDatabase(){
    const conn = await connect();
    const [rows] = await conn.query('USE empresas');
    return rows
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO empresas (nome, id ) VALUES ("Natura", 1),("HP", 2),("O Boticario", 3),("Ambev", 4),("Unilever" ,5), ("Ypê",6),("Nestlé",7),("Petrobrás",8),("Banco do Brasil",9),("P&G",10),("Coca-Cola",11)';
    const values = [customer.nome];
    return await conn.query(sql, values);
}

// async function deleteCustomer(id){
//     const conn = await connect();
//     const sql = 'DELETE FROM empresas WHERE nome="shein";';
//     return await conn.query(sql, [id]);
// }


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM empresas;');
    return rows;
}

module.exports = {useDatabase,insertCustomer, selectCustomers}

