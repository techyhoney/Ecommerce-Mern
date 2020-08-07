const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => res.send('Home Page'));

const admin = (req, res) => res.send('This is admin');

const isAdmin = (req, res, next) => {
  console.log('isAdmin is running...');
  next();
};

const isloggedIn = (req, res, next) => {
  console.log('isloggedIn is running...');
  next();
};

app.get('/admin', isloggedIn, isAdmin, admin);

app.listen(port, () => console.log('Server is running...'));
