let Validator = require("validatorjs");
const formatter = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const EmailService = new (require("../service/Service.js"))();
module.exports = class SegmentController {
  constuctor() {
    //
  }
  async templateForm(req, res) {
    const result = formatter.data(req);
    let rules = formValidator.formValidator();
    let validation = new Validator(result, rules);
    if (validation.passes()&&!validation.fails()) {
      console.log("it passes");
      await EmailService.postEmail(result).then(() => {
        return res.json({ success: true, data: result, message: "ok" });
      });
    }  else {
      console.log("it didnt passes");
    }
  }

  async showAllDatas(req, res) {
    await EmailService.showDatas().then((result) => {
      return res.json({ success: true, data: result, message: "ok" });
    });
  }
  async searchAllDatas(req, res) {
    let searchCriteria = req.body;
    await EmailService.searchDatas(searchCriteria).then((result) => {
      return res.json({ success: true, data: result, message: "ok" });
    });
  }
};
