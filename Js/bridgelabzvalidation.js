const ejetOTPURL = "https://ejet.bridgelabz.com/regotp/";
const ejetOTPGenericFunnelURL = "/Generic/BL-GEN-ORG";
const ejetOTPScholarshipFunnelURL = "/Scholarship/BL-SCH-ORG";
const ISDCode = "91";

const lsFBURL = "https://bridgelabz1.viewpage.co/Job_Opportunity_ejet_FBads";
const lsGAURL = "https://bridgelabz1.viewpage.co/Job_Opportunity_ejet_googleads";
const lsOthersURL = "https://bridgelabz1.viewpage.co/Job_Opportunity_ejet_webinar";

const scholarshipWebinarUrl =
  "https://event.webinarjam.com/channel/BL-Scholarship-EJET";
const genericWebinarUrl =
  "https://event.webinarjam.com/channel/BL-Generic-EJET";
// const registerForWebinarAPI = "https://ejet.devapi.bridgelabz.com/services/register/user/data";
const registerForWebinarAPI = "https://ejetplatform.bridgelabz.com/services/register/user/data";

const checkUsername = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "You must enter a Name", textid);
  } else if (!isBetween(value.length)) {
    showError(errid, `Min 3 character required`, textid);
  } else if (isAlpha(value)) {
    showError(errid, `Name must contain alphabetic only`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkPhone = (textid, errid) => {
 
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Phone Number Required", textid);
  } else if (isNumeric(value)) {
    showError(errid, `Invalid Phone Number`, textid);
  } else if (value.length < 10) {
    showError(errid, `Invalid Phone Number`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkTime = (textid, errid) => {
 
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Time Required", textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkYear = (textid, errid) => {
 
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Year Required", textid);
  } else if (isNumeric(value)) {
    showError(errid, `Invalid year`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkCountry = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Country is required", textid);
  } else if (!isBetween(value.length)) {
    showError(errid, `Min 3 character required`, textid);
  } else if (isAlpha(value)) {
    showError(errid, `Name must contain alphabetic only`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
const checkCompany = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Company is required", textid);
  } else if (!isBetween(value.length)) {
    showError(errid, `Min 3 character required`, textid);
  } else if (isAlpha(value)) {
    showError(errid, `Name must contain alphabetic only`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
const checkOrganisation = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Organization Name Required", textid);
  } else if (!isBetween(value.length)) {
    showError(errid, `Min 3 character required`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkTech = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Technology cannot be blank", textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkMail = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Email Required", textid);
  } else if (isMail(value)) {
    showError(errid, `Invalid Email`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length) => (length < 3 ? false : true);
const isNumeric = (value) => (/^\d+$/.test(value) ? false : true);
const isAlpha = (value) => (value.match("^[a-zA-Z ]*$") ? false : true);
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isMail = (value) => (re.test(String(value).toLowerCase()) ? false : true);

const showError = (input, message, e) => {
  document.getElementById(e).classList.add("formError");
  document.getElementById(input).textContent = message;
};

const showSuccess = (input, e) => {
  document.getElementById(input).textContent = "";
  document.getElementById(e).classList.remove("formError");
};

const validation = (e) => {
  var err = false;
  if (e === "hire") {
    err =
      checkUsername(e + "username", e + "uservalid") &&
      checkPhone(e + "phnumber", e + "phvalid") &&
      checkOrganisation(e + "orgform", e + "orgvalid") &&
      checkTech(e + "techform", e + "techvalid");
  } else if (e === "remote") {
    err =
      checkUsername(e + "username", e + "uservalid") &&
      checkMail(e + "email", e + "emailvalid") &&
      checkCompany(e + "company", e + "companyvalid") &&
      checkCountry(e + "country", e + "countryvalid");
  } else {
    err =
      checkUsername(e + "username", e + "uservalid") &&
      checkMail(e + "email", e + "emailvalid") &&
      checkOrganisation(e + "orgform", e + "orgvalid") &&
      checkTech(e + "techform", e + "techvalid");
  }
  return err;
};

const sendTalent = (e, pass, urlchck) => {
  var str = e.split("-")[0];
  var error = validation(str);

  if (error) {
    var userData = {};
    if (e !== "remote-form") {
      var url_string = window.location.href;
      var url = new URL(url_string);
      let urlcode = url.searchParams.get("source")
        ? url.searchParams.get("source")
        : "";
      userData["Source"] = urlchck ? urlcode : "website";
      if (!pass) {
        closeHire(str + "section");
      }
    }
    loader();
    var url =
      "https://fundoopush-backend.bridgelabz.com/bl-mail/request/callback";
    var id = "hire-thankyou";
    if (e === "talent-form") {
      id = "talent-thankyou";
      url = "https://fundoopush-backend.bridgelabz.com/bl-mail/hirenow";
    } else if (e === "remote-form") {
      url =
        "https://fundoowalkin-backend-prod.incubation.bridgelabz.com/remote-engineering/hire-details";
    }
    var divID = document.getElementById(e);
    var allInputs = divID.getElementsByTagName("input");

    for (var i = 0; i <= allInputs.length - 1; i++) {
      userData[allInputs[i].name] = allInputs[i].value;
    }

    //     Email: "thejas@bridgelabz.com"
    // Name: "Theja"
    // NoOfEngineers: "5 - 10"
    // OrganizationName: "theja"
    // Source: "emailABM"
    // TechnologyStack: "theja"

    fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        clearForm(allInputs);
        closeloader();
        if (e !== "remote-form") {
          if (!pass) {
            closeHire(str + "section");
          }
        }
        thankyou(id);
      })
      .then((json) => {
        clearForm(allInputs);
        closeloader();
        if (e !== "remote-form") {
          if (!pass) {
            console.log("inside clsoe");
            closeHire(str + "section");
          }
        }
        thankyou(id);
      })
      .catch((err) => {
        closeloader();
        if (e !== "remote-form") {
          if (!pass) {
            console.log("inside clsoe");
            closeHire(str + "section");
          }
        }
        console.error(err);
      });
  }
};

const loader = (e) => {
  document.getElementById("preloader").innerHTML = `<div id="loading">
            <img id="loading-image" src="../assets/gif/loading.gif" alt="Loading..." />
            </div>`;
};

const closeloader = (e) => {
  document.getElementById("preloader").innerHTML = "";
};

const thankyou = (id) => {
  // var location = window.location.href.split('pages')[0];
  // window.location.href = location + "pages/thank-you.html";

  window.location.href = "/thank-you.html";
};

const clearForm = (allInputs) => {
  for (var i = 0; i <= allInputs.length - 1; i++) {
    document.getElementById(allInputs[i].id).value = "";
  }
};

const proceed = (phone, err, userId) => {
  // loader();
  let valid = checkPhone(phone, err);
  if (valid) {
    let phoneNum = document.getElementById(phone).value;
    const params = new URLSearchParams(window.location.search);
    let funnelCode = params.get("fc");
    let sourceCode = params.get("sc");
    let data = {
      // counsellorName: "",
      // paymentCode: "",
      // mobileNumber: "",
      // userId: userId,
      // terms: true,
      // sourceCode: sourceCode,
      // action: "reg",
      // funnelCode: funnelCode === "" ? "Generic" : funnelCode,
      // referredId: "",
    };
    let redirect =
      funnelCode === ""
        ? genericWebinarUrl
        : funnelCode === "Generic"
          ? genericWebinarUrl
          : scholarshipWebinarUrl;
    getvals(
      `${registerForWebinarAPI}/${userId}/91${phoneNum}`, data,
      "PUT"
    ).then((response) => {
      // console.log(response);
      // closeloader();
      window.open(redirect, "_self");
      // window.open(
      //   ejetOTPURL + ISDCode + phoneNum + `/` + funnelCode + `/` + sourceCode,
      //   "_blank"
      // );
    });
  }
};

const proceedFromEJETPage = (phone, err, userId) => {
  // loader();
  let valid = checkPhone(phone, err);
  if (valid) {
    let phoneNum = document.getElementById(phone).value;
    const params = new URLSearchParams(window.location.search);
    let funnelCode = params.get("fc");
    let sourceCode = params.get("sc");
    let defaultFC = "Generic"; 
    let defaultSC = "LIO-GEN-PO";
    let data = {
      // counsellorName: "",
      // paymentCode: "",
      // mobileNumber: "",
      // userId: userId,
      // terms: true,
      // sourceCode: sourceCode,
      // action: "reg",
      // funnelCode: funnelCode === "" ? "Generic" : funnelCode,
      // referredId: "",
    };

    if (sourceCode === '' || sourceCode === null) {
      sourceCode = defaultSC;
    }
    if (funnelCode === '' || funnelCode === null) {
      funnelCode = defaultFC;
    }

    let redirecToLSPageURL;
    if (sourceCode.startsWith("FBP")) {
      redirecToLSPageURL = lsFBURL;
    } else if (sourceCode.startsWith("GA")) {
      redirecToLSPageURL = lsGAURL;
    } else if (sourceCode.startsWith("LIO")) {
      redirecToLSPageURL = lsOthersURL;
    } else {
      redirecToLSPageURL = lsOthersURL;
    }


    // let redirect =
    //   funnelCode === ""
    //     ? genericWebinarUrl
    //     : funnelCode === "Generic"
    //     ? genericWebinarUrl
    //     : scholarshipWebinarUrl;
    getvals(
      `${registerForWebinarAPI}/${userId}/91${phoneNum}`, data,
      "PUT"
    ).then((response) => {
      // console.log(response);
      // closeloader();
      window.open(redirecToLSPageURL, "_self");
      // window.open(
      //   ejetOTPURL + ISDCode + phoneNum + `/` + funnelCode + `/` + sourceCode,
      //   "_blank"
      // );
    });
  }
};

const proceedFromHomepage = (phone, err, userId) => {
  // loader();
  let valid = checkPhone(phone, err);
  if (valid) {
    let phoneNum = document.getElementById(phone).value;
    const params = new URLSearchParams(window.location.search);
    let funnelCode = params.get("fc");
    let sourceCode = params.get("sc");
    let defaultFC = "Scholarship";
    let defaultSC = "BLE-SCH-ORG";
    let data = {
      // counsellorName: "",
      // paymentCode: "",
      // mobileNumber: "",
      // userId: userId,
      // terms: true,
      // sourceCode: sourceCode,
      // action: "reg",
      // funnelCode: funnelCode === "" ? "Generic" : funnelCode,
      // referredId: "",
    };

    let redirect =
      funnelCode === ""
        ? scholarshipWebinarUrl
        : funnelCode === "Generic"
          ? genericWebinarUrl
          : scholarshipWebinarUrl;

    if (sourceCode === '' || sourceCode === null) {
      sourceCode = defaultSC;
    }
    if (funnelCode === '' || funnelCode === null) {
      funnelCode = defaultFC;
    }

    getvals(
      `${registerForWebinarAPI}/${userId}/91${phoneNum}`, data,
      "PUT"
    ).then((response) => {
      // console.log(response);
      // closeloader();

      // window.open(redirect, "_self");

      window.open(
        ejetOTPURL + ISDCode + phoneNum + `/` + funnelCode + `/` + sourceCode,
        "_blank"
      );

    });
  }
};

const proceedScholarship = (phone, err) => {
  var valid = checkPhone(phone, err);
  if (valid) {
    let phoneNum = document.getElementById(phone).value;
    window.open(
      ejetOTPURL + ISDCode + phoneNum + ejetOTPScholarshipFunnelURL,
      "_blank"
    );
  }
};

const activeProceed = () => {
  let activate = document.getElementById("ephonevalid").innerText;
  if (!activate) {
    document.getElementById("proceed").style.opacity = 1;
  } else {
    document.getElementById("proceed").style.opacity = 0.5;
  }
};
