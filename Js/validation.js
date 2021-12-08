const isRequired = (value) => (value === "" ? false : true);
// const isBetween = (length) => (length < 3 ? false : true);
// const isNumeric = (value) => (/^\d+$/.test(value) ? false : true);
const isAlpha = (value) => (value.match("^[a-zA-Z ]*$") ? false : true);
const firstNameRegEx = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegEx = /^[A-Z]{1}[a-z]{2,}$/;
const re =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=[^!@#$%^&+=]*[!@#$%^&+=][^!@#$%^&+=]*$)(?=.*[0-9]).{8,}$/

const isMail = (value) => (re.test(String(value).toLowerCase()) ? false : true);
const isPass =(value)=> (passwordRegEx.test(String(value).toLowerCase()) ? false : true);

const showError = (input, message, e) => {
  document.getElementById(e).classList.add("formError");
  document.getElementById(input).textContent = message;
};

const showSuccess = (input, e) => {
  document.getElementById(input).textContent = "";
  document.getElementById(e).classList.remove("formError");
};
let email
const checkMail = (textid, errid) => {
  let valid = false;
  email = document.getElementById(textid).value;
  var value=email;
  if (!isRequired(value)) {
    showError(errid, "Entry required", textid);
  } else if (isMail(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
let password;
const checkPassword = (textid, errid) => {
  let valid = false;
  password  = document.getElementById(textid).value;
  var value=password;
  if (!isRequired(value)) {
    showError(errid, "Entry Required", textid);
  } else if (isPass(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const confirmMail =(textid,errid)=>{
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Entry Required", textid);
  } else if (isMail(value)) {
    showError(errid, `Password not confirm`, textid);
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
    showError(errid, "FirstName Required", textid);
  } else if (isAlpha(value)) {
    showError(errid, `Invalid firstname`, textid);
  }else if (isAlpha(value)) {
    showError(errid, `Name must contain alphabetic only`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
const newPassword = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Password Required", textid);
  } else if (isPass(value)) {
    showError(errid, `Invalid password`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

const checkLastName = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "Last name required", textid);
  } else if (lastNameRegEx(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
const checkFirstName = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "First name required", textid);
  } else if (firstNameRegEx(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
const confirmPassword = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "First name required", textid);
  } else if (isPass(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
// function checkPasswordMatch(input1, input2) {
//   let valid = false;
//   var value = document.getElementById(input1).value;
//   if(input1.value !== input2.value) {
//       showError(errid, 'Passwords do not match');
//   }
// }
const sumbit =() =>{
console.log("hiii");
  var valid =  checkMail('forgomail','forgomailvalid')
  ||
  confirmMail('reentermail','forgomailvalidation')
  //   ||
  // checkLastName('lastname','lastnamevalid')
  //   ||
  // checkFirstName('firstname','firstnamevalidation') 
  //    ||
  // checkUsername('address','forgomailvalid') 
  //    ||
  // confirmPassword('forgopass','forgopassvalid')
  //   ||
  // newPassword('forgopassword','forgopassvalid')
   
  console.log(valid);

  if(valid){
    let data = {
      
      "email":email ,
      "password": password
  }
  console.log(data);
  //  let result= postMethod('user/userSignUp', data);
  //  if(result.status==200||299){
  //   window.location.href = "http://mywebsite.com/home.html";
  //  }
  }
  
}

// const submit1=()=>{
//   var valid =checkUsername('lastname','forgomailvalidation')
// }