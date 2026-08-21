const form = document.querySelector("form");
const email = document.querySelector("#f-email");
const mobile = document.querySelector("#f-mobile");
const legend = document.querySelector("#form-legend");
const password = document.querySelector("#f-password");
const confirmPassword = document.querySelector("#f-conf-password");
const button = document.getElementById('submit-btn');
const switchTest = document.getElementById('switch-text');
const switchLink = document.getElementById('switch-link');
const signUpOnly = document.querySelectorAll(".sign-up-only");

function validatePasswords() {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

mobile.addEventListener("input", () => {
  mobile.value = mobile.value.replace(/\D/g, "");
});

form.addEventListener("submit", (event) => {
  validatePasswords();

  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    return;
  }

  event.preventDefault();
  alert("Account details are valid.");
});


function SwitchPage(event) {
  event.preventDefault();
  if (switchLink.textContent === "Sign in") {
    legend.textContent = "Enter your Credentials to login";
    button.textContent = "Sign in";
    switchTest.textContent = "New to Tempitera?";
    switchLink.textContent = "Create Account";
    signUpOnly.forEach(form => {
      form.setAttribute("style", "display:none;")
    })
  }
  else if (switchLink.textContent === "Create Account") {
    legend.textContent = "Fill the details to create account";
    button.textContent = "Create Account";
    switchTest.textContent = "Already have an account?";
    switchLink.textContent = "Sign in";
    signUpOnly.forEach(form => {
      form.setAttribute("style", "");
    })
  }
}