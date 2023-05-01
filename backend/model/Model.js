const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  // console.log("data is", data);
  return knex("TemplateData").select("*");
};
const searchData = (searchCriteria) => {








  console.log("data is in backedn", searchCriteria);
  return knex("TemplateData")
    .select("*")
    // .where("templateName", "sushant") //default single where clause
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
