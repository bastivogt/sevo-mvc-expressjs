const express = require("express");

const Route = require("./Route");

class RouterManager {
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

    
    hasRoute(route) {
        for(let r of this._routes) {
            if(r.pattern === route.pattern && r.method === method && r.name === route.name) {
                return true;
            }
        }
        return false;
    }

    addRoute(route) {
        if(!this.hasRoute(route)) {
            this._routes.push(route);
            return true;
        }
        return false;
    }

    removeRoute(name) {
        this._routes = this._routes.filter((route) => {
            if(route.name !== name) {
                return route;
            }
        });
    }

    getRoute(name) {
        return this._routes.find((route) => {
            return route.name === name;
        });
    }

    getRoutePattern(name) {
        return this.getRoute(name).pattern;
    }


    getRoutes() {
        return this._routes;
    }

    _buildRouter() {
        for(let route of this._routes) {
            console.log("route", route);
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

module.exports = RouterManager.getInstance();