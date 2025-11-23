const RouterManager = require("../../sevo/routes/RoutesManager");

function getRoutePattern(name, params = null) {
    return RouterManager.getRoutePattern(name, params);
}

module.exports = {
    getRoutePattern: getRoutePattern
}