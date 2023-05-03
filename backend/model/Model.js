const  knex  = require("../connections/Conn.js");
// const User = require('../connections/Conn.js')
// const mongoose = require('mongoose');
// const { User } = require('../connections/Conn')
const displayForm = (data) => {
  return knex("TemplateData").insert(data);
};
// const displayForm = (data) => {
//   // console.log("no");
//   let member = User(data);
//    return result =  member.save();
//   //  console.log('result',result);
// };


const ShowData = () => {
  return knex("TemplateData").select("*");
};
const ShowByID = (id) => {
  return knex("TemplateData").select("*").where("id", id);
};
const filterData = (searchCriteria) => {
  return knex("TemplateData")
    .select("*")
    .where((qb) => {
      if (searchCriteria.tname) {
        qb.where("templateName", searchCriteria.tname);
      }

      if (searchCriteria.tcode) {
        qb.andWhere("templateCode", "=", searchCriteria.tcode);
      }

      if (searchCriteria.status) {
        qb.andWhere("status", "=", searchCriteria.status);
      }
    });
};
const updateUser = (id, data) => {
  return knex("TemplateData").update(data).where("id", id);
};

module.exports = {
  displayForm,
  ShowData,
  ShowByID,
  filterData,
  updateUser,
};
