var express = require("express");
var router = express.Router();
var dbModel = require("../model/data.js");

router.post("/save", (req, res) => {
    res.send(dbModel.saveData(req.body, req.query.id));
});
router.get("/get", (req, res) => {
    res.json(JSON.stringify(dbModel.sendData(req.query.id)));
});

module.exports = router;
