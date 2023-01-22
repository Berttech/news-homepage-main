const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(__dirname));

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});