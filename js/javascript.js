(function () {
  let form = document.querySelector("#contact-form");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");

  function validateName() {
    // Regular expression pattern to match only letters (uppercase and lowercase), spaces, and hyphens
    let pattern = /^[A-Za-z\s\-]+$/;

    // Get the value of the name input field
    let value = nameInput.value;

    // Check if the value matches the pattern and its length is less than or equal to 50
    return pattern.test(value) && value.length <= 50;
  }

  function validateEmail() {
    // Get the value of the email input field
    let value = emailInput.value;
    // Check if the value contains an '@' character
    let hasAtSign = value.indexOf("@") > -1;
    // Check if the value contains an '.' character
    let hasDot = value.indexOf(".") > -1;
    // Check if the value is not empty and contains both '@' and '.'
    return value && hasAtSign && hasDot;
  }

  function validateForm() {
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

  // THE RETURN STATEMENT HERE
})();
