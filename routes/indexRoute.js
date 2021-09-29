const express = require('express');

const router = express.Router();
const indexController = require('../controllers/todos');

router.get("/", indexController.getAll)
module.exports = router ; 