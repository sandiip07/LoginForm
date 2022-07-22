function clearErrors() {
    errors = document.getElementsByClassName("formerror");
    for (let item of errors) {
        item.innerHTML = " ";
    }
}

function seterror(id, error) {
    // set error inside tags and id's
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}



function validForm() {
    // let upperCase = 1,
    //     lowerCase = 1,
    //     sChar = 1,
    //     number = 1;

    var bydefaultReturn = true;
    clearErrors();

    //perform validations and if validation fails , set the value of bydefaultReturn to false

    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 3 && name.length > 30) {
        seterror("name", "Length of name is too short or long");
        bydefaultReturn = false;
    }

    // if (name.length == 0) {
    //     seterror("name", "Length of name is cannoy be empty")
    //     bydefaultReturn = false;
    // }

    var username = document.forms["myForm"]["funame"].value;
    if (username.length < 3 && username.length > 30) {
        seterror("uname", "Length of username is too short or long");
        bydefaultReturn = false;
    }

    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 30) {
        seterror("email", "please enter valid email address");
        bydefaultReturn = false;
    }

    var password = document.forms["myForm"]["fpass"].value;
    if (password.length < 8) {
        seterror("pass", "password should be atleast 8 characters long !");
        console.log(password);
        bydefaultReturn = false;
    }


    var cpassword = document.forms["myForm"]["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "password should be matched");
        bydefaultReturn = false;
    }

    return bydefaultReturn;
}

let timeout;

function myFun() {
    timeout = setTimeout(alertfun, 5000);

}

function alertfun() {


    alert("your form submitted successfully");
}
// var userPassword = document.getElementById("pass").value;

// for (index = 0; index < userPassword.lenght; index++) {
//     if (userPassword[index] >= "A" && userPassword[index] <= "Z") {
//         upperCase = 0;
//     }
//     if (userPassword[index] >= "a" && userPassword[index] <= "z") {
//         lowerCase = 0;
//     }
//     if (userPassword[index] >= "0" && userPassword[index] <= "9") {
//         number = 0;
//     }
//     if (
//         (userPassword[index] >= "!" && userPassword[index] <= "&") ||
//         userPassword[index] == "@"
//     ) {
//         sChar = 0;
//     }
//     if (uppercase == 1) {
//         seterror("pass", "password should be have at least one uppercase!");
//         bydefaultReturn = false;
//     }
//     if (lowercase == 1) {
//         seterror("pass", "password should be  have at least one lowercase! !");
//         bydefaultReturn = false;
//     }
//     if (number == 1) {
//         seterror("pass", "password should be  have at least one number!!");
//         bydefaultReturn = false;
//     }
//     if (special == 1) {
//         seterror(
//             "pass",
//             "password should be  have at least one special charector! !"
//         );
//         bydefaultReturn = false;
//     }
//     if (userPassword.length < 8) {
//         seterror("pass", "password should be atleast 8 characters long !");
//         bydefaultReturn = false;
//     }
//     if (uppercase == 0 && lowercase == 0 && number == 0 && special == 0) {

//         console.log(userPassword);

//     }




// let element = document.getElementById("button");
// setTimeout(function() {
//     element.innerHTML += alert("your form submitted successfully");
// }, 5000);
/*
password = document.getElementById("password").value; 
  
  
     for (let index = 0; index < password.length; index++) { 
         if (password[index] >= 'A' && password[index] <= 'Z') { 
             uppercase = 1; 
         } 
         if (password[index] >= 'a' && password[index] <= 'z') { 
             lowercase = 1; 
  
         } 
         if (password[index] >= '0' && password[index] <= '9') { 
             number = 1; 
  
         } 
         if (password[index] >= '!' && password[index] <= '&' || password[index] == '@') { 
             special = 1; 
  
         } 
     } 
     if (uppercase == 0) 
         document.getElementById('getPassword').innerHTML = "*password must contain atleast one uppercase" 
  
     if (lowercase == 0) 
         document.getElementById('getPassword').innerHTML = "*password must contain atleast one lowercase" 
  
     if (number == 0) 
         document.getElementById('getPassword').innerHTML = "*password must contain atleast one number" 
  
     if (special == 0) 
         document.getElementById('getPassword').innerHTML = "*password must contain atleast one special character" 
     if (uppercase == 1 && lowercase == 1 && number == 1 && special == 1) 
         setTimeout(function () { 
             console.log(password) 
         }, 5000);
 */