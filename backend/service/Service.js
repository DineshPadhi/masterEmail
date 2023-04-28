const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  async postEmail(data) {
    const result = templateModel.displayForm(data);
    return result;
  }

  async showDatas() {
    const result = templateModel.ShowData();
    return result;
  }
  async searchDatas(searchCriteria) {
    const result = templateModel.searchData(searchCriteria);
    return result;
  }
};
