const knex = require("../connections/Conn.js");

const displayForm = (data) => {
  // console.log("no");
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
const updateUser = (id,data) => {
  console.log('data here is',data);
  console.log('id here is',id);
  return knex("TemplateData").update(data).where("id",id);
};

module.exports = {
  displayForm,
  ShowData,
  filterData,
  updateUser
};
