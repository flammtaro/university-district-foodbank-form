const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const houseHoldEl = document.querySelector('#inputSize');
    const cookingConditionEl = document.querySelector('#cookingCondition');
    const microwaveEl = document.querySelector('#microwaveOnly');
    const vegetarianEl = document.querySelector('#vegetarian');
    const veganEl = document.querySelector('#vegan');
    const halalEl = document.querySelector('#halal');
    const kosherEl = document.querySelector('#kosher');
    const glutenFreeEl = document.querySelector('#glutenFree');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
        houseHoldSize: houseHoldEl.value,
        cookingCondition: cookingConditionEl.value,
        microwaveOnly: microwaveEl.value,
        vegetarian: vegetarianEl.value,
        vegan: veganEl.value,
        halal: halalEl.value,
        kosher: kosherEl.value,
        glutenFree: glutenFreeEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  