const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/edit-profile', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'userProfile', 'editProfile', 'editProfile.html'));
});

router.post('/edit-profile', (req, res) => {
    console.log(req.body);
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'userProfile', 'profile', 'profile.html'));
});



module.exports = router;