
const RouterManager = require("./sevo/routes/RouterManager")
const Route = require("./sevo/routes/Route");

const PersonController = require("./src/personApp/controllers/PersonController");
const PageController = require("./src/pageApp/controllers/PageController");




RouterManager.addRoute(new Route(Route.GET, "/", PageController.index, "pageApp:index"));
RouterManager.addRoute(new Route(Route.GET, "/about", PageController.about, "pageApp:about"));

RouterManager.addRoute(new Route(Route.GET, "/person", PersonController.index, "personeApp:index"));
RouterManager.addRoute(new Route(Route.GET, "/person/create", PersonController.create, "personApp:create"));
RouterManager.addRoute(new Route(Route.POST, "/person/store", PersonController.store, "personApp:store"));

//module.exports = RouterManager;