var db = require("../models");

module.exports = function (app) {

    // find all
    app.get("/api/users", function (req, res) {
        db.Users.findAll({
            include: [db.Run]
        }).then(function (dbRun) {
            res.json(dbRun);
        });
    });

    // find one
    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Run]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

}