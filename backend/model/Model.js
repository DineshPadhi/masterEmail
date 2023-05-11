const { knex } = require("../connections/Conn.js");
const { User } = require("../connections/Conn");

const createSqlForm = async (data) => {
  let result = await knex("TemplateData").insert(data);
  return result[0];
};

const createMongForm = async (data) => {
  let member = await User(data).save();
  return member;
};

const ShowData = async () => {
  const result = await knex("TemplateData").select("*");
  return result;
};

const ShowByID = async (id) => {
  let result = await knex("TemplateData").select("*").where("id", id);
  console.log({result:result});
  return result;
};

const filterData = async (searchCriteria) => {
  let result = await knex("TemplateData")
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
  let result = await knex("TemplateData").update(data).where("id", id);
  return result;
};

const updateUserMongo = async (id, data) => {
  const result = await User.updateMany({ sqlId: id }, data, {
    new: true,
  });
  return result;
};

const sendMailSql = async (data)=> {
  const result = await knex('lang')
  .select('subject','body')
    .where((qb) => {

      if (data.templateCode) {
        qb.Where("templateCode", data.templateCode);
      }
      if (data.lang) {
        qb.andWhere("language", data.lang);
      }
    });
    
  return result;
}

module.exports = {
  createSqlForm,
  ShowData,
  ShowByID,
  filterData,
  updateUserSql,
  createMongForm,
  updateUserMongo,
  sendMailSql
};
