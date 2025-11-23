function logger(req, res, next) {
    console.log("path:", req.path);
    console.log("referer:", req.get("referer"));
    next();
}

module.exports = logger;