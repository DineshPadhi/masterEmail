const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  postEmail(data) {
    const result = templateModel.displayForm(data);
    return result;
  }

  showDatas() {
    const result = templateModel.ShowData();
    return result;
  }
  searchDatas(searchCriteria) {
    const result = templateModel.searchData(searchCriteria);
    return result;
  }
};
