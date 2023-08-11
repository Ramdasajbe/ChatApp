const router = require("express").Router();
const RegistartionController = require("../controller/registrationController");

router.post("/registraion", async (req, res) => {
  try {
    let respoce = await RegistartionController.reigiser(req, res);
    console.log(respoce);
    res
      .status(respoce.status)
      .send({ message: respoce.message, data: respoce.data });
  } catch (error) {
    res
      .status("200")
      .send({ message: "unable to register user", error: error });
  }
});
router.post("/login", async (req, res) => {
  try {
    let respoce = await RegistartionController.login(req, res);

    res
      .status(respoce.status)
      .send({ message: respoce.message, data: respoce.data });
  } catch (error) {
    res.status("200").send({ message: "unable to login user", error: error });
  }
});
module.exports = router;
