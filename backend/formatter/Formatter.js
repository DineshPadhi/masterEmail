const data = (req) => {

  const userArry = []

 
    let user = req.body.user
    

    user.map((result)=>{
    
      userArry.push(result.item_text)
     
    })

  let userData = userArry.join(',')
    

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
