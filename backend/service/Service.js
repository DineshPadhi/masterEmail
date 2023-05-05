const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  async postEmailSql(data) {
    let resultSql = await templateModel.createSqlForm(data);
    // resultSql = await templateModel.ShowByID(resultSql);
    // console.log("sql data is", resultSql);
    return { resultSql, status: true };
  }
  async postEmailMongo(data) {
    const resultMongo = await templateModel.createMongForm(data);
    return { resultMongo, status: true };
  }

  showDatas() {
    const result = templateModel.ShowData();
    console.log("result===", result);
    return result;
  }
  async filterDatas(searchCriteria) {
    const result = await templateModel.filterData(searchCriteria);
    return { result, status: true };
  }
  async updateSql(id, data) {
    console.log("in service");
    const result = await templateModel.updateUserSql(id, data);
    return result;
  }
  async updateMongo(id, data) {
    const result = await templateModel.updateUserMongo(id, data);
    return { result, status: true };
  }
};
