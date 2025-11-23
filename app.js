const express = require("express");
const bodyParser = require("body-parser");


require("./routes");
const RoutesManager = require("./sevo/routes/RoutesManager");




//const routes = require("./routes");





const app = express();
const host = "http://localhost";
const port = 8042;


// middleware
app.use(bodyParser.urlencoded({ extended: true }));


// routes
//app.use(routes);
// const RouterManager = require("./routes");

app.use(RoutesManager.getRouter());


app.listen(port, () => {
    console.log(`App is listening on: ${host}:${port}`);
});