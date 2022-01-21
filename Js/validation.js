const isRequired = (value) => (value === "" ? false : true);
// const isBetween = (length) => (length < 3 ? false : true);
// const isNumeric = (value) => (/^\d+$/.test(value) ? false : true);
const isAlpha = (value) => (value.match("^[a-zA-Z ]*$") ? false : true);
const firstNameRegEx = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegEx = /^[A-Z]{1}[a-z]{2,}$/;
const re =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=[^!@#$%^&+=]*[!@#$%^&+=][^!@#$%^&+=]*$)(?=.*[0-9]).{8,}$/
const userNameRegEx =/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/

const isMail = (value) => (re.test(String(value).toLowerCase()) ? false : true);
const isPass =(value)=> (passwordRegEx.test(String(value).toLowerCase()) ? false : true);
const isUserName=(value)=> (userNameRegEx.test(String(value).toLowerCase()) ? false : true);


const showError = (input, message, e) => {
  document.getElementById(e).classList.add("formError");
  document.getElementById(input).textContent = message;
};

const showSuccess = (input, e) => {
  // document.getElementById(input).textContent = "";
  // document.getElementById(e).classList.remove("formError");
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
let password
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
    showError(errid, "Entry Required", textid);
  } else if (isUserName(value)) {
    showError(errid, `Invalid user name`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};

let lastname
const checkLastName = (textid, errid) => {
  let valid = false;
  lastname = document.getElementById(textid).value;
  var value=lastname;
  if (!isRequired(value)) {
    showError(errid, "Last name required", textid);
  } else if (isAlpha(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
let firstname
const checkFirstName = (textid, errid) => {
  let valid = false;
  var value = document.getElementById(textid).value;
  if (!isRequired(value)) {
    showError(errid, "First name required", textid);
  } else if (isAlpha(value)) {
    showError(errid, `Invalid Entry`, textid);
  } else {
    showSuccess(errid, textid);
    valid = true;
  }
  return valid;
};
let newpass;
const newPassword = (textid, errid) => {
  let valid = false;
  newpass = document.getElementById(textid).value;
  var value=newpass;
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

// const sumbitforgot =async() =>{
// console.log("hiii");
//   var valid =  checkMail('email','emailvalid')
//   ||
//   confirmMail('reentermail','forgomailvalidation') 
//   console.log(valid);
//   if(valid){
//     let data = {
//       "email":email 
//   }
//   getvals('user/userSignUp', data, "POST")
//   .then((response)=>{
//   console.log(response);
//   if((response.status>=200) || (response.status<=299) ){
//     window.location.href = "/dashboardpage.html";
   
//    }
//   })
//   .catch((error)=>{
//   console.log(error);
//   })
// }}
  

 const submitsignup= async()=>{
  var valid =  checkFirstName('firstname','firstnamevalidation')
  ||
  checkLastName('lastname','lastnamevalidation')
  ||
  checkUsername('forgomail','forgomailvalid')
  ||
  checkPassword('reentermail','forgomailvalidation')

console.log(valid);
if(valid){
  let data = {
    "firstName": document.getElementById("firstname").value,
    "lastName": document.getElementById("lastname").value,
    "email": document.getElementById("forgomail").value,
    "service": "advance",
    "password": document.getElementById("reentermail").value
}
console.log(data);
getvals('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data, "POST")
.then((response)=>{
console.log(response);
if((response.status>=200) || (response.status<=299) ){
  window.location.href = "../dashboardpage.html";
 
 }
})
.catch((error)=>{
console.log(error);
})

}
}

const submitlogin= async()=>{
  var valid =  checkMail('email','emailvalid')
  ||
  checkPassword('password','passwordvalidation')

console.log(valid);
if(valid){
  let data = {
    "email": document.getElementById("email").value,
    "password": document.getElementById("password").value
}
console.log(data);
getvals('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data, "POST")
.then((response)=>{
console.log(response);
localStorage.setItem("token",response.id);
console.log(response.id);
if(response.status>=200 || response.status<=299 ){
  window.location.pathname = "../dashboardpage.html";
 
 }
})
.catch((error)=>{
console.log(error);
})

}
}