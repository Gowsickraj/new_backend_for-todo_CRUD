const todosModel = require("../models/todosModels");

const getTodos = async (req, res) => {
    try {
        // Fetch all todos from the database

        const {title} = req.query 

        console.log(req.query,"line 7")
        const dataFind = await todosModel.findOne({
            title: title
        });

        console.log(dataFind,"line 14")

        if (dataFind) {
            console.log(dataFind, "Running..");
            return res.status(200).json({
                msg: "Data found",
                data: dataFind,
                code:201
            });
        } else {
            return res.status(404).json({
                msg: "No data found"
            });
        }

    } catch (error) {

        res.status(500).json({
            msg: "Server error. Unable to retrieve data.",
            code : 500
        });
        console.log(`Error fetching todos: ${error.message} >>>>>>>>> getTodos`);
    }
};

module.exports = getTodos;


