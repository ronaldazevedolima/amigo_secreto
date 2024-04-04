const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ msg: 'App no funcionando' }));

module.exports = app;
