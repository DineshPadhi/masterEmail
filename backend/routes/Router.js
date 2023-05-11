let express = require("express");
let router = express.Router();
let { loggerMiddleware } = require("../middleware/Middleware.js");

let segmentController = new (require("../controller/Controllers.js"))();

router.post("/", loggerMiddleware, segmentController.templateForm);
// router.post("/", loggerMiddleware, segmentController.storeInLang);
router.get("/get", loggerMiddleware, segmentController.showAllDatas);
router.get("/getById/:id", loggerMiddleware, segmentController.showById);
router.post("/search", loggerMiddleware, segmentController.searchAllDatas);
router.post("/update/:id", loggerMiddleware, segmentController.updateData);

module.exports = router;
