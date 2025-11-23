const Route = require("./sevo/routes/Route");
const RouterManager = require("./sevo/routes/RouterManager");





RouterManager.addRoute(new Route(Route.GET, "/", () => {}, "pageApp:home"));
RouterManager.addRoute(new Route(Route.GET, "/about", () => {}, "pageApp:about"));
RouterManager.addRoute(new Route(Route.GET, "/contact", () => {}, "pageApp:contact"));


// router.removeRoute("pageApp:contact");
// console.log(router.getRoutes());
// console.log(router.getRoute("pageApp:contact"));

console.log(RouterManager.getRouter());


console.log("route", RouterManager.getRoutePattern("pageApp:about"));



