const express = require('express');
const router = express.Router();

const storeanswer = require('./formdata');

router.post('/storeanswer', storeanswer.post);

module.exports = router;
