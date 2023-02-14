function password_show_hide() {
    const passkey = "Admin";
    const user = "user";
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