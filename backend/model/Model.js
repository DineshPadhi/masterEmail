const { knex } = require("../connections/Conn.js");
const { User } = require("../connections/Conn");

const createSqlForm = async (data) => {
  let result = await knex("TemplateData").insert(data);
  return result[0];
};

const createMongForm = async (data) => {
  let member = await User(data).save();
<<<<<<< HEAD
  // console.log("member", member);
=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
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
<<<<<<< HEAD
      } 
    }
    );
    return result;
};

const updateUserSql = async (id, data) => {
  // console.log("llll");
  let result = await knex("TemplateData").update(data).where("id", id);
  // console.log("result for id is", result);
=======
      }
    });
  return result;
};

const updateUserSql = async (id, data) => {
  let result = await knex("TemplateData").update(data).where("id", id);
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  return result;
};

const updateUserMongo = async (id, data) => {
<<<<<<< HEAD
  // console.log("data in model is", data);
=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
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
