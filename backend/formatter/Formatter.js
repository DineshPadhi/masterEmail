const data = (req) => {
  user = {
    templateName: req.body.templateName,
    templateCode: req.body.templateCode,
    scenario: req.body.scenario,
    providers: req.body.providers,
    user: req.body.user,
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
