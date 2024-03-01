const router = require("express").Router();
const toDoController = require("../controllers/toDoController");

router.get("/", toDoController.index);

module.exports = router;
