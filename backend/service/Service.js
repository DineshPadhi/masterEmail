const templateModel = require("../model/Model.js");

module.exports = class EmailService {
  constuctor() {
    //
  }
  postEmail(data) {
    console.log('yo');
    const result = templateModel.displayForm(data);
    // console.log('in service',result);
    return result;
  }

  showDatas() {
    const result = templateModel.ShowData();
    return result;
  }
  filterDatas(searchCriteria) {
    const result = templateModel.filterData(searchCriteria);
    return result;
  }
  updateData(id) {
    const result = templateModel.update(id);
    return result;
  }
};
