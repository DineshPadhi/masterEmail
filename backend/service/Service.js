const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  async postEmailSql(data) {
    let resultSql = await templateModel.createSqlForm(data);
    return { resultSql, status: true };
  }
  async postEmailMongo(data) {
    const resultMongo = await templateModel.createMongForm(data);
    return { resultMongo, status: true };
  }

  async showDatas() {
    const result = await templateModel.ShowData();
    return { result };
  }
  async showByIds(id) {
    const result = await templateModel.ShowByID(id);
    return result;
  }

  async filterDatas(searchCriteria) {
    const result = await templateModel.filterData(searchCriteria);
    return { result, status: true };
  }
  async updateSql(id, data) {
    const result = await templateModel.updateUserSql(id, data);
    return result;
  }
  async updateMongo(id, data) {
    const result = await templateModel.updateUserMongo(id, data);
    return { result, status: true };
  }
};
