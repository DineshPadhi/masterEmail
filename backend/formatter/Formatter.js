// format data to store in mysql
// const sqlformatter = (data) => {
//   let=userArr=[]
//   let=languArr=[]
//   // console.log('data is in formatter',data);
//   Object.keys(data).some(function(prop){
//     if (prop.includes("tname")) {
//       // console.log('user is',prop);
//       // console.log('its data',data[prop]);
//       userArr.push(data[prop])
//     }
//     if (prop.includes("lang")) {
//       // console.log('lang is',prop);
//       languArr.push(data[prop])
//     }
//   })
//   // console.log('useeeeee',userArr);
//   data.toUsers=userArr
//   data.lang=languArr
//   // for (let i = 0; i < array.length; i++) {

const { raw } = require("body-parser");

//   // }
//   if (typeof data.toUsers==='string') {
//     // console.log('yo');
//     let perMail = {};
//         perMail.to = data.toUsers;
//         perMail.lang = data.lang;
//         perMail.templateCode = data.templateCode;
//         // console.log('permail is',perMail);
//         return perMail

//   } else {

//     let users = data.toUsers;
//     let arr = []
//     for (let i = 0; i < users.length; i++) {

//       let perMail = {};
//         perMail.to = data.toUsers[i];
//         perMail.lang = data.lang[i];
//         perMail.templateCode = data.templateCode;

//         arr.push(perMail);
//       }
//       // console.log('arrsa is',arr);
//       return arr
//   }
// }

const Emailformatter = (data) => {
  let userArr = [];
  let langArr = [];
  // for (let i = 0; i < data.tos.length; i++) {
  //   // const element = array[i];
  //   var tosArray =data.tos[i].tname.split(',')
  //   console.log('data in formatter',tosArray);
  // }
  // let tosArray =data.tos[0].tname.split(',')
  // console.log('data in formatter',tosArray);

  console.log("helllllo");
  // if (prop.includes("tname")) {
  // console.log('user is',prop);
  // console.log('its data',data[prop]);
  // if(data.tos){

  for (let j = 0; j < data.tos.length; j++) {
    // const element = data.tos[i];
    var tosArray = data.tos[j].tname.split(",");
    console.log({ tname: tosArray });
    userArr.push(tosArray);
    // for(let i= 0; i < tosArray.length; i++){

    // }
    console.log("data in formatter", tosArray);

    console.log("tos arry====...", userArr);

    langArr.push(data.tos[j].lang);
    console.log("tos lang is", langArr);
  }
  // }
  // else{
  //   for (let k = 0; k < data.tos.length; k++) {
  //     // const element = data.tos[i];
  //     userArr.push(data.tos[k].tname)
  //   console.log('nomal arry====...',userArr);
  // // }
  // // if (prop.includes("lang")) {
  //   langArr.push(data.tos[k].lang)
  //   console.log('nomal lang is',langArr);
  // // }
  //   }
  // }
  //   userArr.push(data.tos[0].tname)
  //   console.log('arry====...',userArr);
  // // }
  // // if (prop.includes("lang")) {
  //   langArr.push(data.tos[0].lang)
  //   console.log('lang is',langArr);
  // // }

  // console.log('useeeeee',userArr);
  data.toUsers = userArr;
  data.lang = langArr;
  // for (let i = 0; i < array.length; i++) {

  // }

  if (typeof data.toUsers === "string") {
    // console.log('yo');
    let perMail = {};
    perMail.to = data.toUsers;
    perMail.lang = data.lang;
    perMail.templateCode = data.templateCode;
    // console.log('permail is',perMail);
    return perMail;
  } else {
    let users = data.toUsers;
    console.log("users...", users);
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let perMail = {};
      perMail.to = data.toUsers[i];
      perMail.lang = data.lang[i];
      perMail.templateCode = data.templateCode;

      arr.push(perMail);
    }
    // console.log('arrsa is',arr);
    return arr;
  }
};

// data.templateCode = "Happy Diwali";
// console.log("data in formatter is", data);
// const template = data;
// return template;

const sqlformatter = (req) => {
  let langArr = [];
  let langData = "";
  // console.log('id...',req.body.id);
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
    console.log("else body======", req.body);
    const defaultLangArr = req.body.lang;
    defaultLangArr.forEach((element) => {
      langArr.push(element.item_text);
    });
    langData = langArr.join(",");
  }
  console.log("langArr isssssssssss", langArr);

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
  console.log("user is", user);
  return user;
};

// user = {
//   templateName: req.body.templateName,
//   templateCode: req.body.templateCode,
//   scenario: req.body.scenario,
//   providers: req.body.providers,
//   // user: userData,
//   tier: req.body.tier,
//   emailType: req.body.emailType,
//   activity: req.body.activity,
//   status: req.body.status,
//   targetAudience: req.body.targetAudience,
//   lang: langData,
// subject: req.body.subject,
// body: req.body.body,
//   };
//   return user;
// };

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
    // langData = langArr.join(",");
    // console.log();
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
