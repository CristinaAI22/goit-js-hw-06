const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("You need to fill all fields!");
  } else {
    const loginFormData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(loginFormData);
    loginForm.reset();
  }
}
