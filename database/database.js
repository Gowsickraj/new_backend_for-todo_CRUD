const mongoose = require("mongoose");

const connectionDb = () => {
    try {

        const Todo_Db = mongoose.createConnection(process.env.TODO_DB);

        return {Todo_Db};
        
    } catch (error) {
        console.log(`${error} >>>>> database.js`)
    }
}


module.exports = connectionDb();