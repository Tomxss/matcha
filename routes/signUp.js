const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/signUp', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'auth', 'signup', 'signup.html'));
});

module.exports = router;