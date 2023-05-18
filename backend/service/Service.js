const templateModel = require("../model/Model.js");
const configureDetails = require("../config/Config.js");
const nodeMailer = require("nodemailer");
const scheduler = require("../scheduler/scheduler.js");

module.exports = class EmailService {
  constuctor() {}

  async postEmailSql(data) {
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
    return { result, status: true };
  }

  async showByIds(id) {
    const result = await templateModel.ShowByID(id);
    return { result, status: true };
  }
  async showByIdsLang(id) {
    const result = await templateModel.ShowByIDLang(id);
    return { result, status: true };
  }

  async filterDatas(searchCriteria) {
    let result = await templateModel.filterData(searchCriteria);
    return { result, status: true };
  }

  async updateSql(id, data) {
    const result = await templateModel.updateUserSql(id, data);
    return { result, status: true };
  }

  async updateMongo(id, data) {
    const result = await templateModel.updateUserMongo(id, data);
    return { result, status: true };
  }

  async sendSql(data) {
    try {
      
      const result = await templateModel.sendMailSql(data);
      console.log("result in service", result);
      return {result,status:true};
    } catch (error) {
      return {result,status:false}
    }
    // return result
  }
  async updateLang(data) {
    const result = await templateModel.updateLangSql(data);
    console.log("result in service===>>>>", result);
    return {result,status:true}; 
    // return result
  }

  async sendMail(name, sub, body) {
    await scheduler.providers(name, sub, body);
  }

};
