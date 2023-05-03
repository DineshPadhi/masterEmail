const data = (req) => {
  let userArr = [];
  let userData = "";
  console.log("type is", typeof req.body.user[0]);
  if (req.params.id) {
    if (typeof req.body.user[0] === "string") {
      console.log("it is string");

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
      console.log("userArr", userArr);

      userData = userArr.join(",");
    }
    console.log("user is", req.body.user);
    // req.body.user.forEach((element) => {
    //   userArr.push(element.item_text);
    // });
    // userData = userArr.join(",");
    // userData = req.body.user.join(",");
    console.log("userData is", userData);
  } else {
    const defaultArr = req.body.user;
    defaultArr.forEach((element) => {
      userArr.push(element.item_text);
    });
    userData = userArr.join(",");
  }

  console.log("scenario is", req.body.scenario);
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
    subject: req.body.subject,
    body: req.body.body,
  };
  return user;
};
module.exports = { data };
