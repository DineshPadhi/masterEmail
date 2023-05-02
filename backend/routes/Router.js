let express = require("express");
let router = express.Router();

let segmentController = new (require("../controller/Controllers.js"))();

router.post("/", segmentController.templateForm);
router.get("/get", segmentController.showAllDatas);
router.get("/getById/:id", segmentController.showById);
router.post("/search", segmentController.searchAllDatas);
router.post("/update/:id", segmentController.updateData);

module.exports = router;
