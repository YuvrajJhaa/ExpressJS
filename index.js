const express = require('express');
const app = express();

//load config from the env file
require("dotenv").config();
const PORT = process.env.PORT || 4000
//import bodyParser new way
app.use(express.json());

const todoRoutes = require('./routes/todos')
//import routes for the todo API
app.use("/api/v1", todoRoutes);

// start the server
app.listen(3000, ()=>{
    console.log("Server Started");
})

const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req,res)=>{
    console.log("This is Home");
})
