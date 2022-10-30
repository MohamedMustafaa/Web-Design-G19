let form = document.querySelector("#form-id")

function nameValidation(input) {
  let inputValue = input.value.trim();

  if (inputValue.length < 8) {
    handleError(input, "Invalid name must be 8 or more ");
  } else {
    handleError(input);
  }
}

// function handleError (input, msg =""){
//   element.nextElementSibling.innerText = msg
// }

function emailValidation(input) {
  let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  if (!regExp.test(input.value)) {
    handleError(input, "invalid email");
  }
  else{
    handleError(input);
  }
}

function passwordValidation(input) {
  var strongRegex = new RegExp(
    "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})"
  );
  if (!strongRegex.test(input.value)) handleError(input, "invalid password");
  else handleError(input);
}

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "userName-id":
      nameValidation(e.target);
      break;

    case "email-id":
      emailValidation(e.target);
      break;

    case "pass-id":
      passwordValidation(e.target);
      break;

    default:
      e.preventDefault();
  }
});

function handleError(element, msg = " ") {
  element.nextElementSibling.innerText = msg;
}