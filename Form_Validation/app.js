function validation() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  let pattern = /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

  if (fname == "" || fname.trim() == "") {
    document.getElementById("firstname").innerHTML =
      "*Please enter your first name";
    return false;
  }
  if (fname.length < 3 || fname.length > 20) {
    document.getElementById("firstname").innerHTML =
      "*Name must be between 3 and 20 characters";
    return false;
  }
  if (!isNaN(fname)) {
    document.getElementById("firstname").innerHTML =
      "*Oh! Number can't be the name";
    return false;
  }

  /* Last Name Validation */

  if (lname == "" || lname.trim() == "") {
    document.getElementById("lastname").innerHTML =
      "*Please enter your last name";
    return false;
  }

  if (lname.length < 3 || lname.length > 20) {
    document.getElementById("lastname").innerHTML =
      "*Name must be between 3 and 20 characters";
    return false;
  }
  if (!isNaN(lname)) {
    document.getElementById("lastname").innerHTML =
      "*Oh! Number can't be the name";
    return false;
  }

  /* Phone Number Validation */

  if (phone == "" || phone.trim() == "") {
    document.getElementById("number").innerHTML =
      "*Please enter your phone number";
    return false;
  }

  if (isNaN(phone)) {
    document.getElementById("number").innerHTML = "*Only numbers are allowed";
    return false;
  }

  if (phone.length != 10) {
    document.getElementById("number").innerHTML =
      "*Invalid mobile number ! Length must be 10";
    return false;
  }

  /* Email Validation */

  if (pattern.test(email) == false) {
    document.getElementById("mail").innerHTML = "*Please enter valid email id";
    return false;
  }

  /* Password validation */
  var passwordpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (passwordpattern.test(password) == false) {
    document.getElementById("pswd").innerHTML =
      "Password should be 8 characters with one digit and a special character";
    return false;
  }
  if (cpassword != password) {
    document.getElementById("cpswd").innerHTML = "*Password must be same";
    return false;
  }
  // LOCAL STORAGE
  var emailcheck = email;
  var passwordcheck = password;
  localStorage.setItem("emailcheck", emailcheck);
  localStorage.setItem("passwordcheck", passwordcheck);
}
