const data = (req) => {
  user = {
    TemplateName: req.body.templateName,
    Template_Code: req.body.templateCode,
    Scenario: req.body.scenario,
    Providers: req.body.providers,
    User: req.body.user,
    Tier: req.body.tier,
    Email_Type: req.body.emailType,
    Activity: req.body.activity,
    Status: req.body.status,
    Target_Audience: req.body.targetAudience,
    Subject: req.body.subject,
    Body: req.body.body,
  };
  return user;
};
module.exports = { data };
