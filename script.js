function login() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboardPage").classList.remove("hidden");
    } else {
        alert("Iltimos, foydalanuvchi ma'lumotlarini kiriting!");
    }
}
function logout() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("dashboardPage").classList.add("hidden");
}
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}