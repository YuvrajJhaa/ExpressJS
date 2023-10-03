const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required,
        maxLength:50
    },
    description :{
        type:String,
        required:true,
        maxLength:100
    },
    createdAt:{
        type:Number,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Number,
        required:true,
        default:Date.now()
    }

    

})