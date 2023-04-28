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
    if (validation.passes()) {
      console.log("it passes");
    } else if (validation.fails()) {
      console.log("it failed");
    } else {
      console.log("it didnt passes");
    }
    await EmailService.postEmail(result).then(() => {
      return res.json({ success: true, data: result, message: "ok" });
    });
    // .catch(() => {
    //   return res.json({ success: false, error: error });
    // });
  }

  async showAllDatas(req, res) {
    await EmailService.showDatas().then((result) => {
      return res.json({ success: true, data: result, message: "ok" });
    });
  }
  async searchAllDatas(req, res) {
    await EmailService.searchDatas(searchCriteria).then((result) => {
      console.log("result in controller is", result);
      return res.json({ success: true, data: result, message: "ok" });
    });
  }
  async updateData(req, res) {
    const id = req.params.id;

    // const book = await Book.find({ isbn_13: isbn_13, visibility: true });
  }
};
