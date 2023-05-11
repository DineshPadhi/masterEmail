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
  let userMultiEmail=[]
  let multiEmail={}
  for (let i = 0; i < data.length; i++) {
    multiEmail={}
    let result = await knex('lang')
    .select('*')
      .where((qb) => {
        if (data[i].templateCode) {
          console.log('data...>>>>>', data);
          
          qb.where("templateCode", data[i].templateCode)
        }
        if (data[i].lang) {
          qb.andWhere("language", '=', data[i].lang)
        }
        
      });
      console.log('result is',result);
      multiEmail.to=data[i].to
      multiEmail.subject=result[0].subject
      multiEmail.body=result[0].body
      console.log('multiEmail is',multiEmail);

      userMultiEmail.push(multiEmail)
    }
    console.log('result in model is',userMultiEmail);
 
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
