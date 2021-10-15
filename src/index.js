const express = require('express');
const path = require('path');
const app = express();
const port = 6969;
const handlebars  = require('express-handlebars');
const morgan = require('morgan');

app.use(morgan('combined'))

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})