const RouterManager = require("../sevo/routes/RouterManager");

function getUrl(name) {
    return RouterManager.getRoutePattern(name);
}

module.exports = {
    getUrl: getUrl
}