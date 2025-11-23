const express = require("express");

const Route = require("./Route");

class RoutesManager {
    static _instance = null;
    _routes;
    _router;

    constructor() {
        this._routes = [];
        this._router = express.Router();

    }

    static getInstance() {
        if(this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    }

    
    hasRoute(name) {
        for(let r of this._routes) {
            if(r.name === name) {
                return true;
            }
        }
        return false;
    }

    addRoute(route) {
        if(!this.hasRoute(route.name)) {
            this._routes.push(route);
            return true;
        }
        return false;
    }

    removeRoute(name) {
        if(this.hasRoute(name)){
            this._routes = this._routes.filter((route) => {
                if(route.name !== name) {
                    return route;
                }
            });
            return true;

        }
        return false;
    }

    getRoute(name) {
        if(this.hasRoute(name)) {
            return this._routes.find((route) => {
                return route.name === name;
            });

        }
        return false;
    }

    getRoutePattern(name, params = null) {
        if(this.hasRoute(name)) {
            const route = this.getRoute(name);
            const pattern = route.pattern;
            let path = pattern;
            if(params === null) {
                return path;
            }
            for (let p in params) {
                path = path.replaceAll(`:${p}`, params[p]);
            }
            return path;
        }
    }


    getRoutes() {
        return this._routes;
    }

    _buildRouter() {
        for(let route of this._routes) {
            this._router[route.method](route.pattern, route.handler);
        }
    }


    getRouter() {
        this._buildRouter();
        return this._router;

    }


    toString() {
        return "[object RouterManager]";
    }
}

module.exports = RoutesManager.getInstance();