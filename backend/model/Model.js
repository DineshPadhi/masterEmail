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
  console.log("resshhh is", result);
  return result;
};
const ShowByIDLang = async (id) => {
  let result = await knex("lang").select("*").where("template_id", id);
  console.log("resshhh is", result);
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
  console.log("daataaa=====>>>>", data);
  const result = await knex("lang").where("template_id", data.sqlId).del();
  // if (result) {
  for (let i = 0; i < data.lang.length; i++) {
    console.log("voy voy");
    lanobj = {};
    lanobj.templateCode = data.templateCode;
    lanobj.template_id = data.sqlId;
    lanobj.language = data.lang[i].item_text;
    lanobj.subject = data.insideMail[i].subject;
    lanobj.body = data.insideMail[i].body;
    console.log("lanobj====>>>".lanobj);
    await knex("lang").insert(lanobj);
  }
  console.log("in lanobj", lanobj);
  // const result = await knex("lang").where("template_id", data.sqlId).del();
  // }
  console.log("after result", result);
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
          console.log("data...>>>>>", data[i].templateCode);
          console.log("data...>>>>>", data[i].lang);

          qb.where("templateCode", data[i].templateCode);
        }
        if (data[i].lang) {
          qb.andWhere("language", "=", data[i].lang);
        }
      });
    console.log("result is", result);
    multiEmail.to = data[i].to;
    multiEmail.subject = result[0].subject;
    multiEmail.body = result[0].body;
    console.log("multiEmail is", multiEmail);

    userMultiEmail.push(multiEmail);
  }
  console.log("result in model is", userMultiEmail);

  // const result = await knex('lang')
  // .select('*')
  //   .where((qb) => {
  //     if (data[0].templateCode) {
  //       console.log('data...>>>>>', data);

  //       qb.where("templateCode", data[0].templateCode)
  //     }
  //     if (data[0].lang) {
  //       qb.andWhere("language", '=', data[0].lang)
  //     }

  //   });

  //   console.log('result.......>>>',result);

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
