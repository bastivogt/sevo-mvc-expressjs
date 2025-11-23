
const RoutesManager = require("./sevo/routes/RoutesManager")
const Route = require("./sevo/routes/Route");

const PersonController = require("./src/personApp/controllers/PersonController");
const PageController = require("./src/pageApp/controllers/PageController");




RoutesManager.addRoute(new Route(Route.GET, "/", PageController.index, "pageApp:index"));
RoutesManager.addRoute(new Route(Route.GET, "/about", PageController.about, "pageApp:about"));

RoutesManager.addRoute(new Route(Route.GET, "/person", PersonController.index, "personeApp:index"));
RoutesManager.addRoute(new Route(Route.GET, "/person/create", PersonController.create, "personApp:create"));
RoutesManager.addRoute(new Route(Route.POST, "/person/store", PersonController.store, "personApp:store"));
RoutesManager.addRoute(new Route(Route.GET, "/person/:id", PersonController.detail, "personApp:detail"));

//module.exports = RouterManager;