const { MongoClient } = require("mongodb");
const { configureDetails } = require("../config/Config");
const url = configureDetails.mongodb;

// console.log("client is", configureDetails.client);
const knex = require("knex")({
  client: configureDetails.client,
  connection: {
    host: configureDetails.host,
    user: configureDetails.user,
    password: configureDetails.password,
    port: configureDetails.db_port,
    database: configureDetails.database,
  },
});

knex.raw("use MasterEmail").then(() => console.log("Mysql Database Connected"));

const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("MongoDB Connected");
}
main();

module.exports = knex;
