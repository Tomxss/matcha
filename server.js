const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const port = 2000;

const profileRoutes = require('./routes/userProfile');
const homeRoutes = require('./routes/home');
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signUp');

app.use(bodyParser.urlencoded({extended: false}));

app.use(profileRoutes);
app.use(homeRoutes);
app.use(loginRoute);
app.use(signUpRoute);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running optimally on port: ${port}`);
});