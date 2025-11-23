const RouterManager = require("../sevo/routes/RoutesManager");

function getUrl(name, params = null) {
    return RouterManager.getRoutePattern(name, params);
}

module.exports = {
    getUrl: getUrl
}