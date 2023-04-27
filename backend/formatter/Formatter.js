const data = (req) => {
  user = {
    TemplateName: req.body.TemplateName,
    Template_Code: req.body.Template_Code,
    Scenario: req.body.Scenario,
    Providers: req.body.Providers,
    User: req.body.User,
    Tier: req.body.Tier,
    Email_Type: req.body.Email_Type,
    Activity: req.body.Activity,
    Status: req.body.Status,
    Target_Audience: req.body.Target_Audience,
    Subject: req.body.Subject,
    Body: req.body.Body,
  };
  return user;
};
module.exports = { data };
