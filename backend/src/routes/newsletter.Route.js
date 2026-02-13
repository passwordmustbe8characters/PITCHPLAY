const express = require('express');
const router = express.Router();
const { subscribe } = require('../controller/newsletter.Controller');

router.post('/subscribe', subscribe);

module.exports = router;
