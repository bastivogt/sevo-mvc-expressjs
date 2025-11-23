const BaseController = require("../../../sevo/controllers/BaseController");
const RouterManager = require("../../../sevo/routes/RouterManager");

class PersonController extends BaseController {
    index(req, res) {
        return res.send("PersonController.index");
    }

    create(req, res) {
        console.log(RouterManager.getRoutePattern("pageApp:about"));
        return res.send("<form action='/person/store' method='POST'><input type='text' name='name' /><button>Send</button></button></form>");
    }

    store(req, res) {
        console.log(req.body);
        
        return res.redirect(RouterManager.getRoutePattern("pageApp:about"));
        //return res.send("PersonController.store");
    }
}


module.exports = PersonController.getInstance();