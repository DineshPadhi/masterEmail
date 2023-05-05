let Validator = require("validatorjs");
const { sqlformatter, mongoformatter } = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const EmailService = new (require("../service/Service.js"))();
const Response = new (require("../responses/Responses.js"))();

module.exports = class SegmentController {
  constuctor() {}
  // controller to validate and store data
  async templateForm(req, res) {
    try {
      // format data to store in sql
      const sqlData = sqlformatter(req);
      let rules = formValidator.formValidator();
      // check the formatted data
      let validation = new Validator(sqlData, rules);
      if (validation.passes() && !validation.fails()) {
        // store data in sql
        let result = await EmailService.postEmailSql(sqlData);
        req.body.sqlId = result.resultSql;
        const userArray = req.body.user;
        userArray.forEach((element) => {
          req.body.user = element;
          // format data to store in mongodb
          const mongoData = mongoformatter(req);
          // store data in sql
          EmailService.postEmailMongo(mongoData);
        });
        return Response.success(res, sqlData);
      } else {
        return Response.error(res, "Validation failed");
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async showAllDatas(req, res) {
    try {
      // show data in the tabular format in frontend
      const result = await EmailService.showDatas();
      if (result.status) {
        return Response.success(res, result.result);
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async showById(req, res) {
    try {
      const id = req.params.id;
      const result = await EmailService.showByIds(id);

      result.result[0].user = result.result[0].user.split(",");
      result.result[0].lang = result.result[0].lang.split(",");
      return Response.success(res, result.result);
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
        let sqlResult = await EmailService.updateSql(id, sqlData);
        if (sqlResult) {
          req.body.sqlId = req.params.id;
          let data = mongoformatter(req);
          let mongoResult = await EmailService.updateMongo(
            req.body.sqlId,
            data
          );
          return Response.success(res, data);
        } else {
          return Response.error(res, "not updated");
        }
      } else {
        return Response.error(res, "Validation failed");
      }
    } catch (error) {
      return Response.error(res, error);
    }
  }
};
