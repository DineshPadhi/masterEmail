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
  return result;
};
const ShowByIDLang = async (id) => {
  let result = await knex("lang").select("*").where("template_id", id);
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
let lanobj = {};
const updateLangSql = async (data) => {
  const result = await knex("lang").where("template_id", data.sqlId).del();
  // if (result) {
  for (let i = 0; i < data.lang.length; i++) {
    lanobj = {};
    lanobj.templateCode = data.templateCode;
    lanobj.template_id = data.sqlId;
    lanobj.language = data.lang[i].item_text;
    lanobj.subject = data.insideMail[i].subject;
    lanobj.body = data.insideMail[i].body;
    await knex("lang").insert(lanobj);
  }
  return result;
};

const updateUserMongo = async (id, data) => {
  const result = await User.updateMany({ sqlId: id }, data, {
    new: true,
  });
  return result;
};

const sendMailSql = async (data) => {
  let userMultiEmail = [];
  let multiEmail = {};
  for (let i = 0; i < data.length; i++) {
    multiEmail = {};
    let result = await knex("lang")
      .select("*")
      .where((qb) => {
        if (data[i].templateCode) {
          qb.where("templateCode", data[i].templateCode);
        }
        if (data[i].lang) {
          qb.andWhere("language", "=", data[i].lang);
        }
      });
    multiEmail.to = data[i].to;
    multiEmail.subject = result[0].subject;
    multiEmail.body = result[0].body;
    userMultiEmail.push(multiEmail);
  }
  return userMultiEmail;
};

module.exports = {
  createSqlForm,
  ShowData,
  ShowByID,
  ShowByIDLang,
  filterData,
  updateUserSql,
  createMongForm,
  updateUserMongo,
  sendMailSql,
  updateLangSql,
};
