class LoginController {
    index(req, res) {
        res.render("login");
    }

    handler(req, res) {
        console.log("login Success", req.body);
        res.send("<h1>Login Success<h1>");
    }
}

module.exports = new LoginController();
