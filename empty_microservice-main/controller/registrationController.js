const registrationModel = require("../model/registraionmodel");
const bcrypt = require("bcrypt");

const registrationController = {
  async reigiser(req) {
    const { name, email, mobile, password, cpassword } = req.body;
    if (password === cpassword) {
      try {
        const hashpass = bcrypt.hashSync(password, 12);
        const chashpass = bcrypt.hashSync(cpassword, 12);
        const registration = new registrationModel({
          name,
          email,
          mobile,
          password: hashpass,
          cpassword: chashpass,
        });
        const response = await registration.save();
        return {
          status: 200,
          data: response,
          message: "user registred successfully",
        };
      } catch (error) {
        return error;
      }
    } else {
      return {
        status: 400,
        data: null,
        message: "password and c pass should be same",
      };
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    const user = await registrationModel.findOne({ email: email });
    if (user) {
      try {
        const match = await bcrypt.compare(password, user.password);

        if (match) {
          return {
            status: 200,
            data: user,
            message: "user login successfully",
          };
        } else {
          return {
            status: 400,
            data: null,
            message: "invalid credentails",
          };
        }
      } catch (error) {
        return {
          status: 400,
          data: null,
          message: "unable to login",
        };
      }
    } else {
      return {
        status: 400,
        data: user,
        message: "user not found",
      };
    }
  },
};
module.exports = registrationController;
