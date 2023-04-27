let Validator = require("validatorjs");
const formatter = require("../formatter/Formatter.js");
const EmailService = new (require("../service/Service.js"))();
module.exports = class SegmentController {
  constuctor() {
    //
  }
  async templateForm(req, res) {
    const result = formatter.data(req);
    console.log("request is", result);
    EmailService.postEmail(result).then(() => {
      return res.json({ success: true, data: result, message: "ok" });
    });
    // .catch(() => {
    //   return res.json({ success: false, error: error });
    // });
  }

  async showAllDatas(req, res){
    await EmailService.showDatas().then((result)=>{
      return res.json({success: true, data: result, message: "ok"})
    })
  }
};
