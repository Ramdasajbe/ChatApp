const visitreportmodel = require("../model/visitreportmodel");

class clsVisitReport {
  async insertVisitReport(req) {
    try {
      let propertyFound = req.body.isPropertyFound;

      if (!propertyFound) {
        let dateVisit = new Date();
        let image = req.body.propertyImg;
        let propertyCode = req.body.propertyCode;
        let propertyCodeStr = propertyCode.split(".")[0];
        let visitingPerson = req.body.visitingPersonContactNo;
        let dateString =
          String(dateVisit.getDate()) +
          String(dateVisit.getMonth() + 1) +
          String(dateVisit.getUTCFullYear()) +
          String(dateVisit.getHours()) +
          String(dateVisit.getMinutes()) +
          String(dateVisit.getSeconds()) +
          String(dateVisit.getMilliseconds());
        let visitId = propertyCodeStr + visitingPerson + dateString;

        let insertVisitReportPost = new visitReportModel({
          visit_id: visitId,
          uuid: req.body.uuid,
          propertyCode: req.body.propertyCode,
          isMobileUpdated: req.body.isMobileUpdated,
          mobileUpdated: req.body.mobileUpdated,
          isAlternateMobileUpdated: req.body.isAlternateMobileUpdated,
          alternateMobileUpdated: req.body.alternateMobileUpdated,
          isAddressUpdated: req.body.isAddressUpdated,
          addressUpdated: req.body.addressUpdated,
          isAltAddressUpdated: req.body.isAltAddressUpdated,
          altAddressUpdated: req.body.altAddressUpdated,
          visitDate: req.body.visitDate,
          visitingPerson_id: req.body.visitingPerson_id,
          visitingPersonName: req.body.visitingPersonName,
          visitingPersonContactNo: req.body.visitingPersonContactNo,
          upayogakartaShulkName: req.body.upayogakartaShulkName,
          upayogakartaShulk_id: req.body.upayogakartaShulk_id,
          isPropertyFound: req.body.isPropertyFound,
          propertyLat: req.body.propertyLat,
          propertyLong: req.body.propertyLong,
          latLongTime: req.body.latLongTime,
          propertNotFoundReason: req.body.propertNotFoundReason,
          isMeetingPerson: req.body.isMeetingPerson,
          meetingPersonName: req.body.meetingPersonName,
          meetingPersonContactNo: req.body.meetingPersonContactNo,
          gender: req.body.gender,
          isOfflineData: true,
        });

        let response = await insertVisitReportPost.save();

        if (response != null) {
          let responses = {
            data: response,
            message: "Visited successfully",
            status: 200,
            error: null,
          };

          return responses;
        } else {
          let responses = {
            data: null,
            message: "Something went wrong",
            status: 500,
            error: null,
          };

          return responses;
        }
      } else {
        let dateVisit = new Date();
        let propertyCode = req.body.propertyCode;
        let propertyCodeStr = propertyCode.split(".")[0];
        let visitingPerson = req.body.visitingPersonContactNo;
        let dateString =
          String(dateVisit.getDate()) +
          String(dateVisit.getMonth() + 1) +
          String(dateVisit.getUTCFullYear()) +
          String(dateVisit.getHours()) +
          String(dateVisit.getMinutes()) +
          String(dateVisit.getSeconds()) +
          String(dateVisit.getMilliseconds());
        let visitId = propertyCodeStr + visitingPerson + dateString;

        let visitReportPost = new visitReportModel({
          visit_id: visitId,
          uuid: req.body.uuid,
          propertyCode: req.body.propertyCode,
          visitDate: req.body.visitDate,
          visitingPerson_id: req.body.visitingPerson_id,
          visitingPersonName: req.body.visitingPersonName,
          visitingPersonContactNo: req.body.visitingPersonContactNo,
          isPropertyFound: req.body.isPropertyFound,
          propertNotFoundReason: req.body.propertNotFoundReason,
          propertyLat: req.body.propertyLat,
          propertyLong: req.body.propertyLong,
          latLongTime: req.body.latLongTime,
          isOfflineData: true,
        });

        let response = await visitReportPost.save();

        let responses = {
          data: response,
          status: 200,
          message: "Visited successfully",
          error: null,
        };

        var params = {
          propertyCode: req.body.propertyCode,
          isMobileUpdated: true,
          mobileUpdated: "",
          isAlternateMobileUpdated: true,
          alternateMobileUpdated: "",
          isAddressUpdated: true,
          addressUpdated: "",
          visitingPersonContactNo: req.body.visitingPersonContactNo,
          visitDate: req.body.visitDate,
          finalUseType: "",
          propertyImg: [],
          isPropertyFound: false,
          propertyLat: "",
          propertyLong: "",
          propertNotFoundReason: req.body.propertNotFoundReason,
        };
        // let data = await axios({
        //     method: 'post',
        //     ContentType: 'application/json',
        //     url: "http://103.224.247.135:8081/PropertyTaxService/webapi/propertyTaxWebServiceController/updateDetailsFromFoxberry",
        //     data: params
        // })

        // if (data.data.status == "success") {

        //     await visitReportModel.findOneAndUpdate({ _id: response._id },
        //         {
        //             isCodeSend: true,
        //             sendingTime: new Date(),
        //             sendingResponce: JSON.stringify(params)
        //         });
        // }
        // logObj.addPtaxAPILog('http://103.224.247.135:8081/PropertyTaxService/webapi/propertyTaxWebServiceController/updateDetailsFromFoxberry', "post", params, new Date(), data, "visitReport")
        return responses;
      }
    } catch (error) {
      console.log(error);

      let responses = {
        error: error,
        status: 500,
        data: null,
      };

      return responses;
    }
  }
  async getAllVisits() {
    try {
      let visitData = await visitreportmodel.find({});

      if (visitData.length > 0) {
        let responses = {
          data: visitData,
          status: 500,
          error: null,
        };

        return responses;
      } else {
        let responses = {
          data: null,
          message: "No data found",
          status: 500,
          error: null,
        };

        return responses;
      }
    } catch (error) {
      console.log(error);

      let responses = {
        error: error,
        status: 500,
        data: null,
      };

      return responses;
    }
  }
  async getVisitsCount(req) {
    try {
      console.log("req------>", req.body);
      let visitReport = await visitreportmodel
        .find({
          visitingPerson_id: req.body.visitingPerson_id,
        })
        .distinct("propertyCode");
      let visitCount = visitReport;

      let responses = {
        data: visitCount,
        status: 200,
        error: null,
      };

      return responses;
    } catch (error) {
      let responses = {
        error: error,
        status: 500,
        data: null,
      };

      return responses;
    }
  }
}

module.exports = clsVisitReport;
