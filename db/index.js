//index.js
(async () => {
  const db = require("./db");
  const cn = require("./commands");

  console.log("Começou!");

  console.log("CREATE DATABASE empresas");
  const clientes = await db.createDatabase();
  console.log(clientes);

  console.log("USE empresas");
  const use = await db.useDatabase();
  console.log(use);

  setTimeout(async () => {
    console.log("CREATE TABLE empresas");
    const table = await db.createTable();
    console.log(table);
  }, 3000);
  setTimeout(async () => {
    console.log("INSERT INTO empresas");
    const result = await cn.insertCustomer({ empresa: "" });
    console.log(result);
  }, 3000);

  // setTimeout(async () => {
  //   console.log("DELETE FROM empresas");
  //   const result3 = await cn.deleteCustomer();
  //   console.log(result3);
  // }, 3000);

  setTimeout(async () => {
    console.log("SELECT * FROM empresas");
    const select = await cn.selectCustomers();
    console.log(select);
  }, 3000);
  // console.log('UPDATE sustentavel');
  // const result2 = await db.updateCustomer(6, {empresa: ''});
  // console.log(result2);
})();
