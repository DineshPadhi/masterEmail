let express = require("express");
let router = express.Router();
let { loggerMiddleware } = require("../middleware/Middleware.js");

let segmentController = new (require("../controller/Controllers.js"))();


router.get("/get", segmentController.showAllDatas);
router.get("/getById/:id", segmentController.showById);
router.get("/getByIdLang/:id", segmentController.showByIdsLang);
router.post("/search", segmentController.searchAllDatas);
router.post("/update/:id", segmentController.updateData);
router.post("/sendMail", segmentController.sendMail);
router.post("/", segmentController.storeInSql);

module.exports = router;
