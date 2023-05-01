const {MongoClient} = require('mongodb');
const {configureDetails} = require('../config/Config')
const url = configureDetails.mongodb

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "Admin@123",
    port: "3306",
    database: "MasterEmail",
  },
});

knex.raw("use MasterEmail").then(() => console.log("Mysql Database Connected"));

// const client = new MongoClient(url)

//  async function main(){
//   await client.connect();
//  console.log("MongoDB Connected")
// }
// main();

module.exports = knex;

