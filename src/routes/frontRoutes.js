const RoutesManager = require("../../sevo/routes/RoutesManager")
const Route = require("../../sevo/routes/Route");

const PageController = require("../controllers/PageController");



// page
RoutesManager.addRoute(new Route(Route.GET, "/", PageController.index, "page:index"));
RoutesManager.addRoute(new Route(Route.GET, "/about", PageController.about, "page:about"));