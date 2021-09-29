const express = require('express');

const adminController = require('../controllers/adminController');


const router = express.Router();

router.post("/add-todo",adminController.addTodo)

router.get("/delete-todo/:id",adminController.deleteTodo);
router.get("/done-todo/:id",adminController.setDoneTodo);

module.exports = router;