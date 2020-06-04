const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const profileRoutes = require('./routes/userProfile');

app.use(bodyParser.urlencoded({extended: false}));

app.use(profileRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to root page');
});

app.use((req, res) => {
    res.status(404).send('404 Error: Page Not Found');
});

app.listen(port, () => {
    console.log(`Server is running optimally on port: ${port}`);
});