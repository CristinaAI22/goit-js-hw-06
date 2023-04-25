const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", (event) => {
  const length = inputElement.getAttribute("data-length");
  const valueLength = event.target.value.length;
  if (valueLength === Number(length)) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
