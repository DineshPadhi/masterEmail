let Validator = require("validatorjs");
const formatter = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const EmailService = new (require("../service/Service.js"))();
const Response = new (require("../responses/Responses.js"))();
module.exports = class SegmentController {
  constuctor() {
    //
  }
   templateForm= async(req, res)=> {
    try {
      const data = formatter.data(req);
    let rules = formValidator.formValidator();
    let validation = new Validator(data, rules);
    if (validation.passes()&&!validation.fails()) {
      console.log("it passes");
       result=await EmailService.postEmail(data)
      return Response.success(res,result)
    } else {
      return Response.error(res,"Validation failed")
    }
    } catch (error) {
      return Response.error(res,error)
    }
    
  }

  async showAllDatas(req, res) {
    try {
      const result=await EmailService.showDatas()
      return Response.success(res,result)
    } catch (error) {
      return Response.error(res,error)
    }
  }
  async searchAllDatas(req, res) {
    try {
      let searchCriteria = req.body;
      const result= await EmailService.filterDatas(searchCriteria)
      return Response.success(res,result)
    } catch (error) {
      return Response.error(res,error)
    }
    
  }
  async updateData(req, res) {
    try {
      const id=req.params.id
      const result= await EmailService.updateData(id)
      return Response.success(res,result)
    } catch (error) {
      return Response.error(res,error)
    }
    
  }
  async updateData(req, res) {
    const id = req.params.id;

    // const book = await Book.find({ isbn_13: isbn_13, visibility: true });
  }
};
