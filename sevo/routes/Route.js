class Route {
    static GET = "get";
    static POST = "post";
    static PATCH = "patch";
    static PUT = "put";
    static DELETE = "delete";
    static USE = "use";

    constructor(method, pattern, handler, name) {
        this.method = method;
        this.pattern = pattern;
        this.handler = handler;
        this.name = name;
    }

    toString() {
        return `Route(method: ${this.method}, pattern: ${this.pattern}, handler: ${this.handler}, name: ${this.name})`;
    }

}


module.exports = Route;