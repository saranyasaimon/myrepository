var mname = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var pword = document.getElementById("pwd");
const check = document.getElementById("check");
var letters = /^([A-Za-z])+\ ([A-Za-z])+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var numbers = /^[1-9][0-9]{9}$/;
var valid = /^([A-Za-z0-9])+$/;
const button = document.getElementById("submit");
email.onclick = function () {
    if (mname.value==""){
        alert("Please fill the name box!")
    }
    else if(!letters.test(mname.value)) {
        alert("WARNING!! Name field requires only alphabets")
    }
}
phone.onclick = function () {
    if (email.value=="") {
        alert("WARNING!!E-mail field cannot be blank")
    }
    else if (!filter.test(email.value)) {
        alert("WARNING!!Incorrect E-mail")
    }
}
pword.onclick = function () {
    if (phone.value=="") {
        alert("WARNING!!Phone number field cannot be blank")
    }
    else if (!numbers.test(phone.value)) {
        alert("WARNING!!Incorrect number")
    }
}
check.onclick = function () {
    if (pword.value=="") {
        alert("WARNING!!Password field cannot be blank")
    }
    else if (!valid.test(pword.value)) {
        alert("WARNING!!Password must contain uppercase and lowercase letter and numbers")
    }
}   