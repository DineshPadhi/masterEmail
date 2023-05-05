let express = require("express");
let router = express.Router();
let { loggerMiddleware } = require("../middleware/Middleware.js");

let segmentController = new (require("../controller/Controllers.js"))();

<<<<<<< HEAD
router.post("/", segmentController.templateForm);
router.get("/get", segmentController.showAllDatas);
router.get("/getById/:id", segmentController.showById);
router.post("/search", segmentController.searchAllDatas);
router.post("/update/:id", segmentController.updateData);
=======
router.post("/", loggerMiddleware, segmentController.templateForm);
router.get("/get", loggerMiddleware, segmentController.showAllDatas);
router.get("/getById/:id", loggerMiddleware, segmentController.showById);
router.post("/search", loggerMiddleware, segmentController.searchAllDatas);
router.post("/update/:id", loggerMiddleware, segmentController.updateData);
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf

module.exports = router;
