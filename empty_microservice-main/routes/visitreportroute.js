/* eslint-disable no-unused-vars */
const router = require("express").Router();
const visitReport = require("../controller/visitreportcontroller");
let vrObj = new visitReport();

router.post("/insertvisitreport", async function (req, res) {
  try {
    let response = await vrObj.insertVisitReport(req);
    return res.status(200).json(response);
  } catch (error) {
    console.log("error in add user data in router", error);
    return res.status(500).json(error);
  }
});
router.post("/getvisitreport", async function (req, res) {
  try {
    let response = await vrObj.getAllVisits();
    return res.status(200).json(response);
  } catch (error) {
    console.log("error in add user data in router", error);
    return res.status(500).json(error);
  }
});
router.post("/getvisitreportcount", async function (req, res) {
  try {
    let response = await vrObj.getVisitsCount(req);
    return res.status(200).json(response);
  } catch (error) {
    console.log("error in add user data in router", error);
    return res.status(500).json(error);
  }
});
module.exports = router;
