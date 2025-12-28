const RoutesManager = require("../../sevo/routes/RoutesManager");
const PersonModel = require("../models/PersonModel");

const PersonController =  {
    async index(req, res) {
        const people = await PersonModel.findAll({
            where: {
                published: true
            },
            order: [["updatedAt", "DESC"]]
        });
        res.render("person/index", {
            title: "People",
            people: people
        })
    },

    detail(req, res) {
        return res.send(`PersonController.detail id: ${req.params.id}`);
    },

    create(req, res) {
        return res.send(`<form action="${RoutesManager.getRoutePattern('admin:person:store')}" method='POST'><input type='text' name='name' /><button>Send</button></button></form>`);
    },

    store(req, res) {
        console.log(req.body);
        
        // return res.redirect(RouterManager.getRoutePattern("pageApp:about"));
        //return res.send("PersonController.store");
        return res.redirect(RoutesManager.getRoutePattern("admin:person:detail", {id: 2}));
    }
}


module.exports = PersonController;