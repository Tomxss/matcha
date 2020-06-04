const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/edit-profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'userProfile', 'editProfile', 'editProfile.html'));
});

router.post('/edit-profile', (req, res) => {
    console.log(req.body);
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'userProfile', 'profile', 'profile.html'));
});



module.exports = router;