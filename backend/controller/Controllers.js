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
    console.log("request is", result);
<<<<<<< HEAD
    let rules = formValidator();
    let validation = new Validator(result, rules);
    if (validation.passes()) {
      console.log("it passes");
    } else {
      console.log("it didnt passes");
    }
    await EmailService.postEmail(result).then(() => {
=======
    EmailService.postEmail(result).then(() => {
>>>>>>> 406bf01de403a699d87e799fb3c1400ff03331ce
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
};
