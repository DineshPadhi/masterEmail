function formValidator() {
  return {
    templateName: "required",
    templateCode: "required",
    providers: "required",
    user: "required",
    tier: "required",
    emailType: "required",
    status: "required|max:10",
    targetAudience: "required",
    subject: "required",
    body: "required",
  };
}
module.exports = { formValidator };
