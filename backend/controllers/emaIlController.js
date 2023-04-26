let Validator = require("validatorjs");

module.exports = class SegmentController {
  constuctor() {
    //
  }
  async homePage(req, res) {
    return res.send("hello home page");
  }
};

// module.exports = {
//   homePage,
// };
