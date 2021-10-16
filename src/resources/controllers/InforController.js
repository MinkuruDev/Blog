class InforController{

    // [GET] /infor
    handler(req, res) {
        res.render('infor');
    }
}

module.exports = new InforController;