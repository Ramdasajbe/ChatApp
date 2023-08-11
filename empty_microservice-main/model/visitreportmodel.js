const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitReportModel = new Schema(
  {
    visit_id: {
      type: String,
    },
    uuid: {
      type: String,
    },
    property_id: {
      type: String,
    },
    propertyCode: {
      type: String,
    },
    upayogakartaShulkName: {
      type: String,
    },
    upayogakartaShulk_id: {
      type: String,
    },
    isMobileUpdated: {
      type: Boolean,
    },
    mobileUpdated: {
      type: String,
    },
    isAlternateMobileUpdated: {
      type: Boolean,
    },
    alternateMobileUpdated: {
      type: String,
    },
    isAddressUpdated: {
      type: Boolean,
    },
    addressUpdated: {
      type: String,
    },
    isAltAddressUpdated: {
      type: Boolean,
    },
    altAddressUpdated: {
      type: String,
    },
    visitDate: {
      type: Date,
    },
    visitingPerson_id: {
      type: String,
    },
    visitingPersonName: {
      type: String,
    },
    visitingPersonContactNo: {
      type: String,
    },
    propertyImg: {
      type: Array,
    },
    isPropertyFound: {
      type: Boolean,
      default: true,
    },
    propertyLat: {
      type: String,
    },
    propertyLong: {
      type: String,
    },
    latLongTime: {
      type: Date,
    },
    updatedBy: {
      type: String,
    },
    isCodeSend: {
      type: Boolean,
      default: false,
    },
    sendingTime: {
      type: Date,
    },
    sendingResponce: {
      type: String,
    },
    propertNotFoundReason: {
      type: String,
    },
    isPropertyVerified: {
      type: Boolean,
    },
    isMeetingPerson: {
      type: Boolean,
    },
    meetingPersonName: {
      type: String,
    },
    meetingPersonContactNo: {
      type: String,
    },
    isPropertyCodeRight: {
      type: Boolean,
    },
    isOfflineData: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    zone: {
      type: String,
    },
    gat: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["female", "male", "saiyukta", "firm", "trtiyapanthi"],
    },
  },
  { timestamps: true }
);

// visitReportModel.index({propertyCode:1, visitDate:1 }, {name: 'visitr_index_1',unique: true});
module.exports = mongoose.model("visitreports", visitReportModel);
