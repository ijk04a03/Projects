const form = document.querySelector("form");
const email = document.querySelector("#f-email");
const mobile = document.querySelector("#f-mobile");
const password = document.querySelector("#f-password");
const confirmPassword = document.querySelector("#f-conf-password");

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