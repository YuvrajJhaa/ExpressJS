const Todo = require('../models/Todo');

exports.createTodo = async(req,res) => {
    try {
        const {title,description} = req.body;

        // insert in newly created Todo obj
        const response = await Todo.create({title,description})
        // send a json response with success flag

        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message:error.message,
        })
    }
}