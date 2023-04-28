const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  // console.log("data is", data);
  return knex("TemplateData").select("*");
};

module.exports = {
  displayForm,
  ShowData,
};
