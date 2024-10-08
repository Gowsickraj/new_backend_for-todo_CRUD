todosModel = require("../models/todosModels");


module.exports.updateTodoById = async (req,res)=>{

    try { 
        try {
            const {title ,description}= req.body;
        const id = req.params.id;
        const updatedTodo = await todosModel.findByIdAndUpdate(
            {_id:id},
            {title,description},
            {new:true}
        )
 
        return res.status(200).json({
            msg: "Todo updated successfully",
            data: updatedTodo
        });
        } catch (error) {
            return res.status(200).json({msg : "invaild data", code: 400})
        }
        
    } catch (error) {
        res.status(500).json({
            msg: "Server error. Unable to update todo"
        });
        console.error(`Error updating todo: ${error.message}`);
    }
};
