class InforController {
    // [GET] /infor
    handler(req, res) {
        res.render("infor");
    }

    // [GET] /infor/something
    something(req, res) {
        res.send("TESTTTTTTTTTT");
    }
}

module.exports = new InforController();
