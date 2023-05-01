const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  return knex("TemplateData").select("*");
};
const filterData = (searchCriteria) => {

  return knex("TemplateData")
    .select("*")
    .where((qb) => {
      if (searchCriteria.tname) {
        qb.where("templateName",searchCriteria.tname);
      }

      if (searchCriteria.tcode) {
        qb.andWhere("templateCode", "=", searchCriteria.tcode);
      }

      if (searchCriteria.status) {
        qb.andWhere("status", "=", searchCriteria.status);
      }
    })
    
};
const update = (id) => {
  return knex("TemplateData").select("*").where("id",id);
};

module.exports = {
  displayForm,
  ShowData,
  filterData,
  update
};
