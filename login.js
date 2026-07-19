const loginForm = document.getElementById("loginform");
const emailinput = document.getElementById("mail");

// Login Validation
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); //Stops the page from refreshing
  const email = emailinput.value.trim();
  const password = document.getElementById("pwd").value.trim();
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  //console.log(email);
  //console.log(password);

  if (email === "" || password === "") {
    alert("Please enter your email and password.");
  } else if (!emailinput.checkValidity()) {
    alert("Please enter a valid email address.");
  } else if (email === savedEmail && password === savedPassword) {
    alert("Login Successful!");
    loginForm.reset();
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
});

// Login & Signup Form Toggle
const loginDiv = document.getElementById("logindiv");
const signupDiv = document.getElementById("signindiv");
const signupLink = document.getElementById("sign");
const loginLink = document.getElementById("log");

signupLink.addEventListener("click", showSignup);
function showSignup(event) {
  event.preventDefault();
  loginDiv.style.display = "none";
  signupDiv.style.display = "block";
}
loginLink.addEventListener("click", showLogin);
function showLogin(event) {
  event.preventDefault();
  loginDiv.style.display = "block";
  signupDiv.style.display = "none";
}

// Signup Validation
const signupForm = document.getElementById("signform");
const nameInput = document.getElementById("name");
const signupEmailInput = document.getElementById("signmail");
const signupPasswordInput = document.getElementById("signpwd");
const confirmPasswordInput = document.getElementById("cpwd");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = signupEmailInput.value.trim();
  const password = signupPasswordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

 /* console.log(name);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);*/

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all the fields.");
  } else if (!signupEmailInput.checkValidity()) {
    alert("Please enter a valid email address.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Account Created Successfully!");
    signupForm.reset();
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
  }
});
