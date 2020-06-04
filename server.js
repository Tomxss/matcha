const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const profileRoutes = require('./routes/userProfile');
const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({extended: false}));

app.use(profileRoutes);
app.use(homeRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running optimally on port: ${port}`);
});