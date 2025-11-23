const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


require("./routes");
const RoutesManager = require("./sevo/routes/RoutesManager");
const logger = require("./src/middlewares/logger");
const PageController = require("./src/controllers/PageController");
const shortcuts = require("./src/helpers/shortcuts");




const app = express();
const host = "http://localhost";
const port = 8042;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);


// routes
app.use(RoutesManager.getRouter());





// locals
app.locals.route = shortcuts.getRoutePattern;


app.listen(port, () => {
    console.log(`App is listening on: ${host}:${port}`);
});