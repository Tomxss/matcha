const express = require('express');
const router = express.Router();

router.get('/edit-profile', (req, res) => {
    res.send(`
    <form action="/edit-profile" method="POST">
        <label for="firstName">firstName</label>
        <input type="text" name="firstName">
        <label for="lastName">lastName</label>
        <input type="text" name="lastName">
        <label for="email">email</label>
        <input type="text" name="email">
        <label for="gender">gender</label>
        <input type="text" name="gender">
        <label for="preference">preference</label>
        <input type="text" name="preference">
        <label for="biography">biography</label>
        <textarea type="text" name="biography" rows="4"></textarea>
        <label for="interests">interests</label>
        <textarea type="text" name="interests" rows="2"></textarea>
        <h1>Profile pic</h1>
        <img src="https://images.pexels.com/photos/3021595/pexels-photo-3021595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="250" height="250"></img>
        <br>
        <h2>Others...</h2>
        <img src="https://images.pexels.com/photos/3021595/pexels-photo-3021595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="250" height="250"></img>
        <img src="https://images.pexels.com/photos/3021595/pexels-photo-3021595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="250" height="250"></img>
        <img src="https://images.pexels.com/photos/3021595/pexels-photo-3021595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="250" height="250"></img>
        <img src="https://images.pexels.com/photos/3021595/pexels-photo-3021595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="250" height="250"></img>
    </form>`);
});

router.post('/edit-profile', (req, res) => {
    console.log(req.body);
    res.redirect('/profile');
})

module.exports = router;