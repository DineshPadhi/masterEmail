const templateModel = require("../model/Model.js");
const configureDetails = require('../config/Config.js');
const nodeMailer = require('nodemailer')
const scheduler = require('../scheduler/scheduler.js')

module.exports = class EmailService {
  constuctor() {}

  async postEmailSql(data) {
    let resultSql = await templateModel.createSqlForm(data);
    // console.log('data', resultSql);
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


 async sendMail(name, body, sub){

 await scheduler.providers(name, body, sub)

  //   // console.log('hiii');
    // console.log('name1===',name);
  //   let send = nodeMailer.createTransport({
  //     service:'gmail',
  //     auth: {
  //       user:configureDetails.configureDetails.email,
  //       pass:configureDetails.configureDetails.pass
  //     }
  //   });

  //   let mailDetails = {
  //     from: 'cpkushwaha9833@gmail.com',
  //     to: name,
  //     subject: 'MasterEmail',
  //     text: `Test Email For MasterEmail Thank you ${name}`
  //   }

  // await send.sendMail(mailDetails, (err, data)=>{
  //   console.log('data==',data);
  //   console.log('err==',err);
  //     if(err){
  //       console.log('can not send email');
  //     }
  //     else{
  //       console.log('Email send Successfully');
  //     }
  //   })
  }

};
