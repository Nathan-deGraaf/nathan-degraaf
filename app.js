const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname + '/assets')));

app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.render('index', {
    nav: pageInfo
  });
});


app.get('/:page', (req, res) => {
  res.render(req.params.page, {
    nav: pageInfo
  });
});


app.post('/form', (req, res) => {
  res.render('thankYou', {
    name: req.body.name,
    email: req.body.email
  });
})


app.use((err, req, res, next) => {
  return res.status(500).render('error404');
});
app.use((err, req, res, next) => {
  return res.status(404).render('error404');
});

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


