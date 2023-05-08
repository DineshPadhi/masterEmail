require("dotenv").config();

const configureDetails = {
  port: process.env.PORT,
  client: process.env.DB_CLIENT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  mongodb: process.env.MONGODB_URI,
};
module.exports = { configureDetails };
