// REGISTER
const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;

        localStorage.setItem("pilix_username", username);
        localStorage.setItem("pilix_password", password);

        alert("Account Created Successfully!");

        window.location.href = "login.html";
    });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if(loginForm){

    // auto fill saved password
    const savedUser = localStorage.getItem("pilix_username");
    const savedPass = localStorage.getItem("pilix_password");

    if(savedUser){
        document.getElementById("username").value = savedUser;
    }

    if(savedPass){
        document.getElementById("password").value = savedPass;
    }

    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const savedUsername = localStorage.getItem("pilix_username");
        const savedPassword = localStorage.getItem("pilix_password");

        if(username === savedUsername && password === savedPassword){

            localStorage.setItem("pilix_logged_in", "true");

            alert("Login Successful!");

            window.location.href = "index_pixel.html";

        } else {

            alert("Wrong Username or Password!");
        }
    });
}