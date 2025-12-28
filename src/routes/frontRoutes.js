const RoutesManager = require("../../sevo/routes/RoutesManager")
const Route = require("../../sevo/routes/Route");

const PageController = require("../controllers/PageController");
const PersonController = require("../controllers/PersonController");



// page
RoutesManager.addRoute(new Route(Route.GET, "/", PageController.index, "page:index"));
RoutesManager.addRoute(new Route(Route.GET, "/about", PageController.about, "page:about"));


// person
RoutesManager.addRoute(new Route(Route.GET, "/person", PersonController.index, "person:index"));