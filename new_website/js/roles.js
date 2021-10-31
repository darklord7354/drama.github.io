
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Drama Group" && password === "DramaGroup2021") {
        location.href="/new_website/html/roles2.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})