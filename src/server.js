'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const checkName = require('./middleware/validator.js').checkName;
const app = express();

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    //PROOF OF LIFE
    res.send('hello world');
});

app.get('/person', checkName(), (req, res) => {
    console.log(req.query.name);
    res.json({
        name: req.query.name
    })
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 3003;
        app.listen(PORT, () => console.log('server is running on port', PORT))
    },
}