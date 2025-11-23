const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


require("./routes");
const RoutesManager = require("./sevo/routes/RoutesManager");
const logger = require("./src/middlewares/logger");
const PageController = require("./src/controllers/PageController");
const shortcuts = require("./src/helpers/shortcuts");






//const routes = require("./routes");





const app = express();
const host = "http://localhost";
const port = 8042;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// middleware
app.use(express.static(path.join(__dirname, "src", "public")))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger);


// routes
//app.use(routes);
// const RouterManager = require("./routes");
app.use(RoutesManager.getRouter());
console.log(RoutesManager.getRouter());


function test() {
    return "TEST";
}
// locals
app.locals.route = shortcuts.getRoutePattern;


app.listen(port, () => {
    console.log(`App is listening on: ${host}:${port}`);
});