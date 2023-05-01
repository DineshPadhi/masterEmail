const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  return knex("TemplateData").select("*");
};
const searchData = (searchCriteria) => {

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
    // });
    })
    
};

module.exports = {
  displayForm,
  ShowData,
  searchData,
};
