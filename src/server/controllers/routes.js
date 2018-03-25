const express = require('express');
const router = express.Router();

const students = require('./students.js');

router.get('/students', students.get);

module.exports = router;
