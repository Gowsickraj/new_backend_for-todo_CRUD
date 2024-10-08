const { CreateTodo } = require("../controllers/CreateTodo");
const { deleteTodo } = require("../controllers/delete");
const getTodos = require("../controllers/getTodo");
const {updateTodoById} = require('../controllers/updateTodoById');


const router = require("express").Router();

router.route("/create").post(CreateTodo);
router.route("/gettodo").get(getTodos);
router.route("/update/:id").put(updateTodoById);
router.route("/delete/:id").delete(deleteTodo)

module.exports = router;