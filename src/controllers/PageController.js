const PageController =  {
    index(req, res) {
        // return res.send("PageController.index");
        return res.render("page/index", {
            title: "Hello World!"
        });
    },

    about(req, res) {
        return res.render("page/index", {
            title: "About Page"
        });
    },

    page404(req, res) {
        
        // return res.status(404).send("404 - Page not found");
        return res.status(404).render("page/404", {
            title: "404 - Page not found"
        });
    }

}

module.exports = PageController;