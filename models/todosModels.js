const mongoose = require("mongoose");
const {Todo_Db} = require("../database/database.js")

const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        enum: ["Venu", "Kavi"],
        default: "Venu"
    }
});

const todosModel = Todo_Db.model("todo", todosSchema);

module.exports = todosModel;