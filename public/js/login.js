
const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#email-input-login');
    const passwordEl = document.querySelector('#password-input-login');
  
    const response = await fetch('/api/client/login', {
      method: 'POST',
      body: JSON.stringify({
        email: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const adminData = await response.json()

    if (adminData.client.role === "admin") {
      console.log("it worked");
      location.href = "/user/admin/vieworder"
      return
    } else {location.href ="/"}
    console.log(adminData);
};
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
    // console.log("button-works")
  