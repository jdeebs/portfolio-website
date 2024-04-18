(function () {
  let form = document.querySelector("#contact-form");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");

  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .contact-container

    // Check and remove any existing errors
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }

    // Add an error message if the provided message isn't empty
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateName() {
    // Regular expression pattern to match only letters (uppercase and lowercase), spaces, and hyphens
    let pattern = /^[A-Za-z\s\-]+$/;

    // Get the value of the name input field
    let value = nameInput.value;

    // Check if the name field is empty
    if (!value) {
      // If empty, show an error message and return false
      showErrorMessage(nameInput, "Name is a required field.");
      return false;
    }

    // Check if the name exceeds 50 characters or contains any special characters
    if (value.length >= 50 && pattern.test(!value)) {
      // IF either condition is true, show an error message and return false
      showErrorMessage(nameInput, "Name input max 50 characters, no special characters allowed");
      return false;
    }

    // If no errors are found, clear any existing error messages and return true
    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    // Get the value of the email input field
    let value = emailInput.value;

    // If the email field is empty, show an error message and return false
    if (!value) {
      showErrorMessage(emailInput, "Email is a required field.");
      return false;
    }

    // If the email address does not contain an "@" symbol, show an error message and return false
    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address");
      return false;
    }

    // If the email address does not contain a ".", show an error message and return false
    if (value.indexOf(".") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address");
      return false;
    }

    // If the email address is valid, clear any existing error message and return true
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validateName();
    // Check if both email and name inputs are valid
    return validateEmail() && validateName();
  }

  // Add event listener for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server

    // If the form is valid, show a success message
    if (validateForm()) {
      alert("Success!");
    }
  });

  // Add event listeners for Email and Name inputs
  emailInput.addEventListener("input", validateEmail);
  nameInput.addEventListener("input", validateName);

})();
