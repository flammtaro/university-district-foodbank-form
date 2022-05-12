const signUpBtn = document.querySelector('#signUpBtn');

const signupFormHandler = async function (event) {
  console.log("button works");
  event.preventDefault();

  const wantedItems = document.querySelectorAll('input[type="checkbox"]:checked')

  const fullNameEl = document.querySelector('#client-full-name');
  const emailEl = document.querySelector('#email-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');
  const houseHoldEl = document.querySelector('#inputSize');
  const other = document.querySelector('#other');
  const user = {
    clientName: fullNameEl.value,
    email: emailEl.value,
    password: passwordEl.value,
    householdSize: houseHoldEl.value,
    otherRestrictions:other.value
  }
  wantedItems.forEach(element => {
    user[element.id] = true
  });

  const response = await fetch('/api/client', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(user);
  if (response.ok) {
    document.location.replace('/new-order');
  } else {
    alert('Failed to sign up');
  }
};

// document
//   .querySelector('#signup-form')
//   .addEventListener('submit', signupFormHandler);

signUpBtn.addEventListener("click", signupFormHandler);

