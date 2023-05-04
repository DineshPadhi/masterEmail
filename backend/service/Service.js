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
    console.log('result===', result);
    return result;
  }
  showByID(id) {
    const result = templateModel.ShowByID(id);
    return result;
  }
  filterDatas(searchCriteria) {
    const result = templateModel.filterData(searchCriteria);
    return result;
  }
  update(id, data) {
    const result = templateModel.updateUser(id, data);
    return result;
  }
};
