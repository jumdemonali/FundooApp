const isRequired = (value) => (value === "" ? false : true);
// const isBetween = (length) => (length < 3 ? false : true);
// const isNumeric = (value) => (/^\d+$/.test(value) ? false : true);
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

const checkUsername = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Firstsbamem Required", textid);
  } else if (isAlpha(value)) {
    showError(errid, `Invalid firstnam`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const sumbit =() =>{
  var valid =  checkMail('forgomail','forgomailvalid') 
     && 
     checkUsername()
    //  if(){

    //  }
}