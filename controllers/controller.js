var express = require("express");
var path = require("path");

var router = express.Router();

var pwd = require("../models/post");

var saveId;

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/display", function (req, res) {
    pwd.all(function (data) {
        res.json({ users: data });
    });
});

// router.get("/signup", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
// });


// router.post("/signup", function(req, res){
//     pwd.create([
//         "name", "password"
//     ], [
//         req.body.name, req.body.password
//     ], function(result) {
//         res.json({ id: result.insertId});
//     });
// });

router.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

router.get("/displayAccounts", function (req, res) {
    pwd.allAcc(function (data) {
        res.json({ passwords: data });
    });
});

router.get("/displayOne", function (req, res) {
    saveId = req.query.id
    module.exports.id = saveId;
    pwd.displayOne(req.query.id, function (data) {
        res.json({ passwords: data })
    });
});

router.post("/createAccount/:id", function (req, res) {
    var userId = req.params.id;
    pwd.createNewAcc([
        "user_name", "type", "password", "user_id"
    ], [
        req.body.user_name, req.body.type, req.body.password, userId
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/dashboard/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    pwd.update({
        user_name: req.body.user_name,
        password: req.body.password
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

router.delete("/dashboard/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    pwd.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;