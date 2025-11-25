
const RoutesManager = require("../../sevo/routes/RoutesManager")
const Route = require("../../sevo/routes/Route");

const PersonController = require("../controllers/PersonController");
const PageController = require("../controllers/PageController");



// page
RoutesManager.addRoute(new Route(Route.GET, "/", PageController.index, "page:index"));
RoutesManager.addRoute(new Route(Route.GET, "/about", PageController.about, "page:about"));

// person
RoutesManager.addRoute(new Route(Route.GET, "/person", PersonController.index, "person:index"));
RoutesManager.addRoute(new Route(Route.GET, "/person/create", PersonController.create, "person:create"));
RoutesManager.addRoute(new Route(Route.POST, "/person/store", PersonController.store, "person:store"));
RoutesManager.addRoute(new Route(Route.GET, "/person/:id", PersonController.detail, "person:detail"));

// 404
RoutesManager.addRoute(new Route(Route.USE, "/", PageController.page404, "page:404"));

//module.exports = RouterManager;