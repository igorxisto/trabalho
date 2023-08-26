async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:1234@localhost:3306/"
  );
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function createDatabase() {
  const conn = await connect();
  const [rows] = await conn.query("CREATE DATABASE empresas");
  return rows;
}

async function useDatabase() {
  const conn = await connect();
  const [rows] = await conn.query("USE empresas");
  return rows;
}

async function createTable() {
  const conn = await connect();
  const [rows] = await conn.query("CREATE TABLE empresas(nome varchar(50) , id int(2))");
  return rows;
}


module.exports = { createDatabase, useDatabase, createTable };
