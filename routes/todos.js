const express = require('express');
const router = express.Router();

const createTodo = require('../controllers/createTodo')

// kis path ko kis controller ke sath(logic handler) ke sath map karna chahte ho
router.post("/createTodo",createTodo)

module.exports = router;