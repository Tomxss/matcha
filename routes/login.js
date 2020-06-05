const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'auth', 'login', 'login.html'));
});

// router.get('/signup', (req, res) => {
//     res.sendFile(path.join(rootDir, 'views', 'signup', 'signup.html'));
// });

module.exports = router;