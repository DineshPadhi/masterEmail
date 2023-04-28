const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
const ShowData = () => {
  // console.log("data is", data);
  return knex("TemplateData").select("*");
};
const searchData = (searchCriteria) => {








  // console.log("data is", searchCriteria);
  return knex("TemplateData")
    .select("*")
    .where("templateName", "sushant") //default single where clause
    .where((qb) => {
      // if (searchCriteria.templateName) {
        qb.where("templateName","sushant");
      // }

    //   if (searchCriteria.templateCode) {
    //     qb.orWhere("items.itemType", "=", searchCriteria.templateCode);
    //   }

    //   if (searchCriteria.Status) {
    //     qb.orWhere("items.category", "=", searchCriteria.category);
    //   }
    // });
    })
    
};

module.exports = {
  displayForm,
  ShowData,
  searchData,
};
