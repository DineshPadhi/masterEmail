// require("dotenv").config();

const configureDetails = {
  port: process.env.PORT,
  client: process.env.CLIENT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  password: process.env.DB_PORT,
  database: process.env.DATABASE,
};
module.exports = { configureDetails };
