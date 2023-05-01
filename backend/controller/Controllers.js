let Validator = require("validatorjs");
const formatter = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const EmailService = new (require("../service/Service.js"))();
module.exports = class SegmentController {
  constuctor() {
    //
  }
   templateForm= async(req, res)=> {
    const result = formatter.data(req);
    let rules = formValidator.formValidator();
    let validation = new Validator(result, rules);
    if (validation.passes()&&!validation.fails()) {
      console.log("it passes");
      const result=await EmailService.postEmail(result)
        return res.status(200).json({ success: true, data: result, message: "ok" });
      
    } else {
      console.log("it didnt passes");
      return res.json({ success: false, error:"did not inserted", message: "ok" });
    }
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
    let searchCriteria = req.body;
    await EmailService.searchDatas(searchCriteria).then((result) => {
      console.log("result in controller is", result);
      return res.json({ success: true, data: result, message: "ok" });
    });
  }
};
