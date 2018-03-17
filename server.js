const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { sync, seed, models } = db;

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`Listening on port ${port}!!!`));

