let Validator = require("validatorjs");
const {
  sqlformatter,
  mongoformatter,
  storeToLangDB,
} = require("../formatter/Formatter.js");
const formValidator = require("../validator/Validator.js");
const { knex } = require("../connections/Conn.js");
const EmailService = new (require("../service/Service.js"))();
const Response = new (require("../responses/Responses.js"))();

module.exports = class SegmentController {
  constuctor() {}
  // controller to validate and store data
  async templateForm(req, res) {
    try {
      console.log("body is", req.body);
      // format data to store in sql
      const sqlData = sqlformatter(req);
      console.log("sqlData==>>", sqlData);
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
          const mongoData = mongoformatter(req);
          // console.log('mongodata', req.body.body);
          // console.log('mongodata', req.body.subject);
          // console.log('mongodata name', mongoData.name);
          EmailService.postEmailMongo(mongoData);
          if (mongoData.name && mongoData.message.providers == "nodemailer") {
            // let email = EmailService.sendMail(
            //   mongoData.name,
            //   req.body.body,
            //   req.body.subject
            // );
          }
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

      // result.result[0].user = result.result[0].user.split(",");
      result.result[0].lang = result.result[0].lang.split(",");
      return Response.success(res, result.result);
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async searchAllDatas(req, res) {
    try {
      let searchCriteria = req.body;
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
  async sendMail(req, res) {
    try {
      console.log("req is", req.body);
      const sqlData = Emailformatter(req.body);
      console.log("data in controller is", sqlData);
      let sqlResult = await EmailService.sendSql(sqlData);
      console.log("from db is", sqlData);

      for (let i = 0; i < sqlData.length; i++) {
        await EmailService.sendMail(
          sqlResult[i].to,
          sqlResult[i].subject,
          sqlResult[i].body
        );
      }

      // console.log('email=====');
      return Response.success(res, sqlResult);
    } catch (error) {
      return Response.error(res, error);
    }
  }

  async storeInLang(req, res) {
    let data = sqlformatter(req);

    let rules = formValidator.formValidator();
    // check the formatted data
    let validation = new Validator(data, rules);
    if (validation.passes() && !validation.fails()) {
      let result = await knex("TemplateData").insert(data);
      if (result) {
        console.log("result========>", result);
        req.body.template_id = result[0];
        console.log("body===", req.body);

        let data2 = storeToLangDB(req);
        let rules2 = formValidator.langDbValidator();
        let sqlvalidation = new Validator(data2, rules2);

        if (validation.passes() && !validation.fails()) {
          let result2 = await knex("lang").insert(data2);
          console.log("result2========>", result2);
        }
      }
    }
  }
};
