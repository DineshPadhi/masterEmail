const { raw } = require("body-parser");

const Emailformatter = (data) => {
  let userArr = [];
  let langArr = [];

  for (let j = 0; j < data.tos.length; j++) {
    var tosArray = data.tos[j].tname.split(",");
    userArr.push(tosArray);
    langArr.push(data.tos[j].lang);
  }
  data.toUsers = userArr;
  data.lang = langArr;

    let users = data.toUsers;
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let perMail = {};
      perMail.to = data.toUsers[i];
      perMail.lang = data.lang[i];
      perMail.templateCode = data.templateCode;
      console.log('permail is in else part',perMail);

      arr.push(perMail);
    }
    return arr;
  }
};

const sqlformatter = (req) => {
  let langArr = [];
  let langData = "";
  if (req.params.id) {
    if (typeof req.body.lang[0] === "string") {
      req.body.lang.forEach((element) => {
        if (!langArr.includes(element)) {
          langArr.push(element);
        }
        langData = langArr.join(",");
      });
    } else {
      const defaultLangArr = req.body.lang;
      defaultLangArr.forEach((element) => {
        langArr.push(element.item_text);
      });

      langData = langArr.join(",");
    }
  } else {
    const defaultLangArr = req.body.lang;
    defaultLangArr.forEach((element) => {
      langArr.push(element.item_text);
    });
    langData = langArr.join(",");
  }

  user = {
    templateName: req.body.templateName,
    templateCode: req.body.templateCode,
    scenario: req.body.scenario,
    providers: req.body.providers,
    tier: req.body.tier,
    emailType: req.body.emailType,
    activity: req.body.activity,
    status: req.body.status,
    targetAudience: req.body.targetAudience,
    lang: langData,
  };
  return user;
};

const storeToLangDB = (req) => {
  let langArr = [];
  let langData = "";
  if (req.params.id) {
    if (typeof req.body.lang[0] === "string") {
      req.body.lang.forEach((element) => {
        if (!langArr.includes(element)) {
          langArr.push(element);
        }
        langData = langArr.join(",");
      });
    } else {
      const defaultLangArr = req.body.lang;
      defaultLangArr.forEach((element) => {
        langArr.push(element.item_text);
      });

      langData = langArr.join(",");
    }
  } else {
    const defaultLangArr = req.body.lang;
    defaultLangArr.forEach((element) => {
      langArr.push(element.item_text);
    });
  }
  langTableArr = [];
  for (let i = 0; i < req.body.insideMail.length; i++) {
    lang = {
      template_id: req.body.template_id,
      templateCode: req.body.templateCode,
      language: langArr[i],
      subject: req.body.insideMail[i].subject,
      body: req.body.insideMail[i].body,
    };
    langTableArr.push(lang);
  }

  return langTableArr;
};

// format data to store in mongodb
const mongoformatter = (req) => {
  let langObject;
  let someArr = [];
  if (typeof req.body.lang[0] === "string") {
    req.body.lang.forEach((element) => {
      someArr.push(element);
    });
    const toObject = (arr) => {
      someArr = [];
      arr.forEach((element) => {
        someArr.push(element);
      });
      let rv = {};
      let deepobj = {};
      deepobj.body = req.body.body;
      deepobj.subject = req.body.subject;
      for (let i = 0; i < someArr.length; i++) {
        rv[someArr[i]] = deepobj;
      }
      return rv;
    };
    langObject = toObject(req.body.lang);
  } else {
    const toObject = (arr) => {
      someArr = [];
      arr.forEach((element) => {
        someArr.push(element.item_text);
      });
      let rv = {};
      let deepobj = {};
      deepobj.body = req.body.body;
      deepobj.subject = req.body.subject;
      for (let i = 0; i < someArr.length; i++) {
        rv[someArr[i]] = deepobj;
      }
      return rv;
    };
    langObject = toObject(req.body.lang);
  }

  let mongoUser = {
    templateName: req.body.templateName,
    templateCode: req.body.templateCode,
    scenario: req.body.scenario,
    providers: req.body.providers,
    tier: req.body.tier,
    emailType: req.body.emailType,
    activity: req.body.activity,
    status: req.body.status,
    targetAudience: req.body.targetAudience,
    lang: langObject,
  };

  if (req.body.user.item_text) {
    return {
      name: req.body.user.item_text,
      sqlId: req.body.sqlId,
      message: mongoUser,
    };
  } else {
    return {
      sqlId: req.body.sqlId,
      message: mongoUser,
    };
  }
};

module.exports = {
  sqlformatter,
  mongoformatter,
  Emailformatter,
  storeToLangDB,
};
