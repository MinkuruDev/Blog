const sha256 = require("sha256");
const loginController = require("./login");
const inforRouter = require("./infor");
const siteController = require("./site");

function route(app) {
    app.use("/infor", inforRouter);

    app.get("/search", (req, res) => res.render("search"));

    app.use("/login", loginController);

    app.get("/register", (req, res) => res.render("register"));

    app.post("/register", (req, res) => {
        res.render("register");
        req.body.hashedPassword = sha256(req.body.password);
        // console.log(req.body);
    });

    app.use("/", siteController);
}

module.exports = route;
