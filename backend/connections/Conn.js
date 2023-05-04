// const { MongoClient } = require("mongodb");
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

// const client = new MongoClient(url);

// async function main() {
//   await client.connect();
//   console.log("MongoDB Connected");

// }
// main();

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
    // templateName: { type: String },
    // templateCode: { type: String },
    // scenario: { type: String },
    // providers: { type: String },
    // tier: { type: String },
    // emailType: { type: String },
    // activity: { type: String },
    // status: { type: String },
    // targetAudience: { type: String },
    // lang: { type: Object },
    // subject: { type: String },
    // body: { type: String },
  },
  { timestamps: true }
);

const User = new mongoose.model("products", UserSchema);

// let data = new User({
//   userName:'hp',
//   templateName: 'fgh',
//   scenario: 'hjsa',
//   providers: 'asvja',
//   tier: 'ags',
//   emailType: 'ags',
//   activity: 'asg',
//   status: 'agia',
//   targetAudience: 'uga',
//   language : 'hala',
//   subject: 'agsia',
//   body: 'ags'
// });
// data.save().then((res)=>{
//   console.log(res)
// })

// module.exports = {

//   User
// };
module.exports = { knex, User };
// module.exports = knex;
