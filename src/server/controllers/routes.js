const express = require('express');
const router = express.Router();

const studentProfile = require('./studentProfile');

router.get('/profile/:student_id', studentProfile.get);

module.exports = router;
