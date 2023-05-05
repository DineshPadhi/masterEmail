const templateModel = require("../model/Model.js");

module.exports = class EmailService {

  constuctor() {
  }

  async postEmailSql(data) {
    // console.log("inserver");
    let resultSql = await templateModel.createSqlForm(data);
    return { resultSql, status: true };
  }

  async postEmailMongo(data) {
    const resultMongo = await templateModel.createMongForm(data);
    return { resultMongo, status: true };
  }

  async showDatas() {
    const result = await templateModel.ShowData();
    // console.log("result===", result);
    return result;
  }

  async showByIds(id) {
    console.log("nana");
    const result = await templateModel.ShowByID(id);
    // console.log("sult is", result);
    return result;
  }

  async filterDatas(searchCriteria) {
    let result = await templateModel.filterData(searchCriteria);
    return { result, status: true };
  } 

  async updateSql(id, data) {
    // console.log("in service");
    const result = await templateModel.updateUserSql(id, data);
    return result;
  }

  async updateMongo(id, data) {
    const result = await templateModel.updateUserMongo(id, data);
    return { result, status: true };
  }

};
