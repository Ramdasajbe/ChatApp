const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrationModel = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    password: {
      type: String,
    },
    cpassword: {
      type: String,
    },
    isverified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// registrationModel.index({propertyCode:1, visitDate:1 }, {name: 'visitr_index_1',unique: true});
module.exports = mongoose.model("registreduser", registrationModel);
