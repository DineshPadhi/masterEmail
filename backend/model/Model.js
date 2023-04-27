const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  console.log("data is", data);
  return knex("TemplateData").insert(data);
};

module.exports = {
  displayForm,
};
