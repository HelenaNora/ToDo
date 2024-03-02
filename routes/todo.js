const router = require("express").Router();
const toDoController = require("../controllers/toDoController");

router.post("/add/todo", toDoController.save);
router.get("/delete/todo/:_id", toDoController.delete);
router.get("/", toDoController.index);

module.exports = router;
