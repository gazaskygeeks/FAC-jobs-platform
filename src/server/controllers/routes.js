const express = require('express');
const router = express.Router();

const students = require('./students.js');
const studentProfile = require('./studentProfile');


router.get('/students', students.get);
router.get('/profile/:student_id', studentProfile.get);

module.exports = router;
