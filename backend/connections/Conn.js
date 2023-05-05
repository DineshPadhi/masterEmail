const mongoose = require("mongoose");
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

mongoose
  .connect(`${url}`, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succefull");
  })
  .catch((e) => {
    console.log(e);
  });

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    sqlId: { type: Number },
    message: { type: Object },
  },
  { timestamps: true }
);

const User = new mongoose.model("products", UserSchema);

module.exports = { knex, User };