const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  // console.log("data is", data);
  return knex("TemplateData").select("*");
};
const searchData = (searchCriteria) => {
  // console.log("data is", data);
  return knex("TemplateData")
    .select("*")
    .where("templateName", "diensh") //default single where clause
    .where((qb) => {
      if (searchCriteria.searchTerm) {
        qb.where("templateName", "like", `%${searchCriteria.searchTerm}%`);
      }

      if (searchCriteria.itemType) {
        qb.orWhere("items.itemType", "=", searchCriteria.itemType);
      }

      if (searchCriteria.category) {
        qb.orWhere("items.category", "=", searchCriteria.category);
      }
    });
};

module.exports = {
  displayForm,
  ShowData,
  searchData,
};
