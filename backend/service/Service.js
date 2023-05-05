const templateModel = require("../model/Model.js");

module.exports = class EmailService {
<<<<<<< HEAD

  constuctor() {
  }

  async postEmailSql(data) {
    // console.log("inserver");
=======
  constuctor() {}

  async postEmailSql(data) {
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
    let resultSql = await templateModel.createSqlForm(data);
    return { resultSql, status: true };
  }

  async postEmailMongo(data) {
    const resultMongo = await templateModel.createMongForm(data);
    return { resultMongo, status: true };
  }

  async showDatas() {
    // service to get all the data
    const result = await templateModel.ShowData();
<<<<<<< HEAD
    // console.log("result===", result);
    return result;
=======
    return { result, status: true };
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  }

  async showByIds(id) {
    const result = await templateModel.ShowByID(id);
<<<<<<< HEAD
    // console.log("sult is", result);
    return result;
=======
    return { result, status: true };
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  }

  async filterDatas(searchCriteria) {
    let result = await templateModel.filterData(searchCriteria);
    return { result, status: true };
  } 

  async updateSql(id, data) {
<<<<<<< HEAD
    // console.log("in service");
=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
    const result = await templateModel.updateUserSql(id, data);
    return { result, status: true };
  }

  async updateMongo(id, data) {
    const result = await templateModel.updateUserMongo(id, data);
    return { result, status: true };
  }

};
