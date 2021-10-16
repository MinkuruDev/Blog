const express = require('express');
const path = require('path');
const app = express();
const port = 6969;
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const { url } = require('inspector');
const sha256 = require('sha256');

// server log
// app.use(morgan('combined'))

// static path
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// using express handlebars
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => res.render('home'));
app.get('/infor', (req, res) => res.render('infor'));
app.get('/search', (req, res) => res.render('search'));
app.get('/login', (req, res) => res.render('login'));
app.post('/login', (req, res) => {
  res.render('login');
  req.body.hashedPassword = sha256(req.body.password);
  // console.log(req.body);
});
app.get('/register', (req, res) => res.render('register'));
app.post('/register', (req, res) => {
  res.render('register');
  req.body.hashedPassword = sha256(req.body.password);
  // console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})