const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  async postEmail(data) {
    console.log("req,body", data);
    const result = templateModel.displayForm(data);
    return result;
  }
};
