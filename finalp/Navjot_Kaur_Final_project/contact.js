/********w************

    Final Project
    Name: Navjot Kaur
    Date: Apirl 27, 2023
    Description: In this file,

*********************/

function validateForm() {
    var name = document.getElementById("name").Value;
    var phone = document.getElementById("phone").Value;
    var email = document.getElementById("email").Value;
    var comments = document.getElementById("comments").Value;

    var nameCode = /^[a-zA-Z\s]+$/;
    var phoneCode = /^\d{10}$/;
    var emailCode = /^\S+@\S+\.\S+$/;
  
    if (!nameCode.test(name)) {
      document.getElementById("name-error").style.display="block";
      document.getElementById("name").focus();
      document.getElementById("name").Select();
      return false;
    }

    if (!phoneCode.test(phone)) {
        document.getElementById("phone-error").style.display="block";
        document.getElementById("phone").focus();
        document.getElementById("phone").Select();
        return false;
      }

      if (!emailCode.test(email)) {
        document.getElementById("email-error").style.display="block";
        document.getElementById("email").focus();
        document.getElementById("email").Select();
        return false;
      }

      return true;

}

