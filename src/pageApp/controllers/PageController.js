const BaseController = require("../../../sevo/controllers/BaseController");


class PageController extends BaseController {
    index(req, res) {
        return res.send("PageController.index");
    }

    about(req, res) {
        return res.send("PageController.about");
    }

    page404(req, res) {
        return res.send("404 - Page not found");
    }

}

module.exports = PageController.getInstance();