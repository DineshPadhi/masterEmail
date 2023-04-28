let express = require("express");
let router = express.Router();

let segmentController = new (require("../controller/Controllers.js"))();

router.post("/", segmentController.templateForm);
router.get("/get", segmentController.showAllDatas);

module.exports = router;
