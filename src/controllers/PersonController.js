const BaseController = require("../../sevo/controllers/BaseController");
const RoutesManager = require("../../sevo/routes/RoutesManager");

class PersonController extends BaseController {
    index(req, res) {
        return res.send("PersonController.index");
    }

    detail(req, res) {
        return res.send(`PersonController.detail id: ${req.params.id}`);
    }

    create(req, res) {
        return res.send("<form action='/person/store' method='POST'><input type='text' name='name' /><button>Send</button></button></form>");
    }

    store(req, res) {
        console.log(req.body);
        
        // return res.redirect(RouterManager.getRoutePattern("pageApp:about"));
        //return res.send("PersonController.store");
        return res.redirect(RoutesManager.getRoutePattern("person:detail", {id: 2}));
    }
}


module.exports = PersonController.getInstance();