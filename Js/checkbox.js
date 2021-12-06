function myFunction() {
    var x = document.getElementById("reentermail");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }