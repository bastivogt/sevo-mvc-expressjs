const db = require("./db");

(async function () {
    await db.sync({ force: true });
})();