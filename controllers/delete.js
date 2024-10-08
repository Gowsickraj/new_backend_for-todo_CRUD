const todosModel = require("../models/todosModels");

module.exports.deleteTodo = async (req, res) => {
  try {
    console.log("Line 3")
    const id = req.params.id;
    console.log("line 7")
    try {
        const deletedTodo = await todosModel.findByIdAndDelete({_id: id});
        console.log(deletedTodo);
        return res
      .status(200)
      .json({ message: "Todo deleted successfully", deletedTodo, code: 201 });
        
    } catch (error) {
        return res.status(200).json({msg: "Invlid data", code: 400})
    }

  } catch (error) {
    console.log(`Error Delete todos: ${error.message} >>>>>>>>> delete.js`);
    return res.status(500).json({
      msg: "Server error.",
      code: 500,
    });
  }
};
