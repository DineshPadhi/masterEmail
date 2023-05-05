const { knex } = require("../connections/Conn.js");
const { User } = require("../connections/Conn");

const createSqlForm = async (data) => {
  let result = await knex("TemplateData").insert(data);
  return result[0];
};

const createMongForm = async (data) => {
  let member = await User(data).save();
  // console.log("member", member);
  return member;
};

const ShowData = async () => {
  let result = await knex("TemplateData").select("*");
  return result;
};

const ShowByID = async (id) => {
  let result = await knex("TemplateData").select("*").where("id", id);
  return result;
};

const filterData = async (searchCriteria) => {
  let result =  await knex("TemplateData")
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
    return result;
};

const updateUserSql = async (id, data) => {
  // console.log("llll");
  const result = await knex("TemplateData").update(data).where("id", id);
  console.log("result for id is", result);
  return result;
};

const updateUserMongo = async (id, data) => {
  // console.log("data in model is", data);
  const result = await User.updateMany({ sqlId: id }, data, {
    new: true,
  });
  return result;
};

module.exports = {
  createSqlForm,
  ShowData,
  ShowByID,
  filterData,
  updateUserSql,
  createMongForm,
  updateUserMongo,
};
