function formValidator() {
  return {
    templateName: "required",
    templateCode: "required",
    providers: "required",
    tier: "required",
    emailType: "required",
    status: "required|max:10",
    targetAudience: "required",
  };
}


function langDbValidator(){
  return{
    template_id: "required",
    templateCode: "required",
    language: "required",
    subject: "required",
    body: "required",
  }
}

module.exports = { formValidator, langDbValidator };
