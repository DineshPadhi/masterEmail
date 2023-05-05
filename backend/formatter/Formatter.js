const sqlformatter = (req) => {
  let userArr = [];
  let userData = "";
  if (req.params.id) {
    if (typeof req.body.user[0] === "string") {
      req.body.user.forEach((element) => {
        if (!userArr.includes(element)) {
          userArr.push(element);
        }
        userData = userArr.join(",");
      });
    } else {
      const defaultArr = req.body.user;
      defaultArr.forEach((element) => {
        userArr.push(element.item_text);
      });

      userData = userArr.join(",");
    }
  } else {
    const defaultArr = req.body.user;
    defaultArr.forEach((element) => {
      userArr.push(element.item_text);
    });
    userData = userArr.join(",");
  }

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
    user: userData,
    tier: req.body.tier,
    emailType: req.body.emailType,
    activity: req.body.activity,
    status: req.body.status,
    targetAudience: req.body.targetAudience,
    lang: langData,
    subject: req.body.subject,
    body: req.body.body,
  };
  return user;
};

const mongoformatter = (req) => {
  // console.log("body is", req.body);
  let langObject;
  let someArr = [];
  // console.log("inside mongoformatter", typeof req.body.lang[0]);
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
      // console.log(
      //   "rv is===================================>>>>>>>>>>>>>>>>",
      //   rv
      // );
      return rv;
    };
    langObject = toObject(req.body.lang);
    // console.log("someArr is", someArr);
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

module.exports = { sqlformatter, mongoformatter };
