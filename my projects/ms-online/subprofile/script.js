function password_show_hide() {
  
    var passContent = document.getElementById("password");
    var showEye = document.getElementById("show_eye");
    var hideEye = document.getElementById("hide_eye");
    hideEye.classList.remove("d-none");
    if (passContent.type === "password") {
        passContent.type = "text";
        showEye.style.display = "none";
        hideEye.style.display = "block";
    } else {
        passContent.type = "password";
        showEye.style.display = "block";
        hideEye.style.display = "none";
    }
}

function password_show_hide1() {
   
    var passContent1 = document.getElementById("password1");
    var showEye1 = document.getElementById("show_eye1");
    var hideEye1 = document.getElementById("hide_eye1");
    hideEye1.classList.remove("d-none");
    if (passContent1.type === "password") {
        passContent1.type = "text";
        showEye1.style.display = "none";
        hideEye1.style.display = "block";
    } else {
        passContent1.type = "password";
        showEye1.style.display = "block";
        hideEye1.style.display = "none";
    }
}
function password_show_hide2() {
   
    var passContent1 = document.getElementById("password2");
    var showEye1 = document.getElementById("show_eye2");
    var hideEye1 = document.getElementById("hide_eye2");
    hideEye1.classList.remove("d-none");
    if (passContent1.type === "password") {
        passContent1.type = "text";
        showEye1.style.display = "none";
        hideEye1.style.display = "block";
    } else {
        passContent1.type = "password";
        showEye1.style.display = "block";
        hideEye1.style.display = "none";
    }
}