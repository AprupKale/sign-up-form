const firstName = document.getElementById("first-name");

firstName.addEventListener("input", (event) => {
  if (firstName.validity.typeMismatch) {
    firstName.setCustomValidity("Valid first name required");
  } else {
    firstName.setCustomValidity("");
  }
});


const lastName = document.getElementById("last-name");

lastName.addEventListener("input", (event) => {
  if (lastName.validity.typeMismatch) {
    lastName.setCustomValidity("Valid last name required");
  } else {
    lastName.setCustomValidity("");
  }
});

const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Valid email address required");
  } else {
    email.setCustomValidity("");
  }
});

const phone = document.getElementById("phone");

phone.addEventListener("input", (event) => {
  if (phone.validity.typeMismatch) {
    phone.setCustomValidity("Valid phone number required");
  } else {
    phone.setCustomValidity("");
  }
});

const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

password.addEventListener("input", (event) => {
    if (password.value != passwordConfirm.value) {
        password.setCustomValidity("Passwords do not match");
        passwordConfirm.setCustomValidity("Passwords do not match");
        const passwordErrorMessage = document.querySelector("div.password-confirm > p");
        passwordErrorMessage.textContent = "* Passwords do not match";
        passwordErrorMessage.style.cssText = "font-family: inherit; font-size: calc(calc(3vw + 5vh) / 8); color: red";
      } else {
        password.setCustomValidity("");
        const passwordErrorMessage = document.querySelector("div.password-confirm > p");
        passwordErrorMessage.textContent = "";
        passwordConfirm.setCustomValidity("");
      }
})

passwordConfirm.addEventListener("input", (event) => {
    if (password.value != passwordConfirm.value) {
        password.setCustomValidity("Passwords do not match");
        passwordConfirm.setCustomValidity("Passwords do not match");
        const passwordErrorMessage = document.querySelector("div.password-confirm > p");
        passwordErrorMessage.textContent = "* Passwords do not match";
        passwordErrorMessage.style.cssText = "font-family: inherit; font-size: calc(calc(3vw + 5vh) / 8); color: red";
      } else {
        password.setCustomValidity("");
        const passwordErrorMessage = document.querySelector("div.password-confirm > p");
        passwordErrorMessage.textContent = "";
        passwordConfirm.setCustomValidity("");
      }
})