let express = require("express");
let router = express.Router();
let { loggerMiddleware } = require("../middleware/Middleware.js");

let segmentController = new (require("../controller/Controllers.js"))();

// router.post("/", loggerMiddleware, segmentController.templateForm);
router.post("/",  segmentController.templateForm);
// router.get("/get", loggerMiddleware, segmentController.showAllDatas);
router.get("/get", segmentController.showAllDatas);
// router.get("/getById/:id", loggerMiddleware, segmentController.showById);
router.get("/getById/:id", segmentController.showById);
// router.post("/search", loggerMiddleware, segmentController.searchAllDatas);
router.post("/search", segmentController.searchAllDatas);
// router.post("/update/:id", loggerMiddleware, segmentController.updateData);
router.post("/update/:id", segmentController.updateData);
router.post("/sendMail", segmentController.sendMail);
// router.post("/", loggerMiddleware, segmentController.storeInLang);


module.exports = router;
