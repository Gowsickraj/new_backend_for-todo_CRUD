require("dotenv").config();
const express = require("express");
const cors= require("cors");
const router = require("./routes/routes");

try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());

    app.use("/api/todo",router)

    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is connected on the port:${port}`);
    })
    
} catch (error) {
    console.log(`${error} >>>>>>>>>>> Server.js`)
}