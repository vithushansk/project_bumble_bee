const express = require('express');
const app = express();

const user_route = require('./routes/userRoute');
app.use(express.json());
app.use(user_route);
module.exports = app;