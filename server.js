// // const express = require('express');
// // const app = express();

// // used to parse req.bosy to express -> PUT and Post
// // const bodyParser = require('body-parser');
// // const { default: mongoose } = require('mongoose');
// // app.use(bodyParser.json())

// app.listen(3000, ()=>{
//     console.log("Server started at 3000");
// });

// app.get('/', (req,res)=>{
//     res.send("Ram Ram bhai saraya ne");
// })

// app.post('/api/cars', (request,response)=>{
//     const {name,brand} =  request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("Car submitted successfully");
//     // Shows Error while parsing
//     // USe middleware called bodyParser
// })
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/myDatabase" ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{console.log("Connection Established Successfull");})
// .catch((error)=>{console.log("Error Occured");})