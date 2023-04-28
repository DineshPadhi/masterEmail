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

knex.raw("use MasterEmail").then(() => console.log("Database Connected"));

module.exports = knex;
