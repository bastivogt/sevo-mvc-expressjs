const RoutesManager = require("../../sevo/routes/RoutesManager")
const Route = require("../../sevo/routes/Route");

const PersonController = require("../controllers/PersonController");





// person
RoutesManager.addRoute(new Route(Route.GET, "/admin/person", PersonController.index, "admin:person:index"));
RoutesManager.addRoute(new Route(Route.GET, "/admin/person/create", PersonController.create, "admin:admin:person:create"));
RoutesManager.addRoute(new Route(Route.POST, "/admin/person/store", PersonController.store, "admin:person:store"));
RoutesManager.addRoute(new Route(Route.GET, "/admin/person/:id", PersonController.detail, "admin:person:detail"));

