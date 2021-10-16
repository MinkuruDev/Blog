const sha256 = require('sha256');
const inforRouter = require('./infor');

function route(app){
    
    app.get('/', (req, res) => res.render('home'));

    app.get('/infor', inforRouter);
    
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
    });
}

module.exports = route;
