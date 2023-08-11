var express = require("express");
var router = express.Router();
var visitReport = require("./visitreportroute");
var registration = require("./registartionroute");
/* GET home page. */
router.get("/", (req, res) => {
  throw new Error();
});
// Link other routes here.
router.get("/route1", function (req, res, next) {
  res.send("Hello Route1");
});
router.use("/report", visitReport);
router.use("/user", registration);
module.exports = router;
