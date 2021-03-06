const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const affirmationsContoller = require('./controllers/affirmations.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/api/v1/users', usersController);
app.use('/api/v1/affirmations', affirmationsContoller);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
