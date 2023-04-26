let express = require("express");
let router = express.Router();

let segmentController = new (require("../controllers/emaIlController.js"))();

router.get("/", segmentController.homePage);

module.exports = router;
