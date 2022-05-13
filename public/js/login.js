const loginBtn = document.querySelector('#loginBtn')

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
      location.href = "/admin/vieworder"
      return
    } else {location.href ="/"}
    console.log(adminData);
};

loginBtn.addEventListener("click", loginFormHandler);
  // document
  //   .querySelector('#login-form')
  //   .addEventListener('submit', loginFormHandler);
  //   // console.log("button-works")
    
// document.getElementById("signUpBtn").onclick = function(){
//   console.log("sign up")
//   window.location.replace('/');
  
// };