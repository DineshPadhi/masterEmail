let Validator = require("validatorjs");
const { sqlformatter, mongoformatter } = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const EmailService = new (require("../service/Service.js"))();
const Response = new (require("../responses/Responses.js"))();

module.exports = class SegmentController {

  constuctor() {
  }

  async templateForm(req, res){
    try {
      const sqlData = sqlformatter(req);
      let rules = formValidator.formValidator();
      let validation = new Validator(sqlData, rules);
      if (validation.passes() && !validation.fails()) {
        // console.log("it passes");
        let result = await EmailService.postEmailSql(sqlData);
        // console.log("result in controller of sql is", result);
        req.body.sqlId = result.resultSql;
        const userArray = req.body.user;
        userArray.forEach((element) => {
          req.body.user = element;
          const mongoData = mongoformatter(req);
          EmailService.postEmailMongo(mongoData);
          // console.log("after formatting", mongoData);
        });
        return Response.success(res, sqlData);
      } else {
        return Response.error(res, "Validation failed");
      }
    } catch (error) {
      return Response.error(res, error);
    }
  };

  async showAllDatas(req, res) {
    // console.log("hiii");
    try {
      const result = await EmailService.showDatas();
      // console.log("rseult is", result);
      if (result) {
        return Response.success(res, result);
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async showById(req, res) {
    try {
      const id = req.params.id;
      const result = await EmailService.showByIds(id);
      result[0].user = result[0].user.split(",");
      result[0].lang = result[0].lang.split(",");
      return Response.success(res, result);
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async searchAllDatas(req, res) {
    try {
      let searchCriteria = req.body;
      // console.log('searchCriteria',searchCriteria);
      const result = await EmailService.filterDatas(searchCriteria);
      if (result.status == true) {
        return Response.success(res, result.result);
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async updateData(req, res) {
    try {
      const id = req.params.id;
      const sqlData = sqlformatter(req);
      let rules = formValidator.formValidator();
      let validation = new Validator(sqlData, rules);
      if (validation.passes() && !validation.fails()) {
        // console.log("it passes");
        let sqlResult = await EmailService.updateSql(id, sqlData);
        // console.log("result in update is", sqlResult);
        if (sqlResult) {
          // console.log("parameter is", req.params.id);
          req.body.sqlId = req.params.id;
          let data = mongoformatter(req);
          // console.log(
          //   "mongofromattter is//////////////////////////////////////",
          //   data
          // );
          let mongoResult = await EmailService.updateMongo(
            req.body.sqlId,
            data
          );
          // console.log("updated data in mongo is", mongoResult);
          return Response.success(res, data);
        } else {
          return Response.error(res, "not updated");
        }
      } else {
        console.log("it failed");
        return Response.error(res, "Validation failed");
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }

};
