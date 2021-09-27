const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#exampleInputEmail1').value.trim();
  const password = document.querySelector('#exampleInputPassword1').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/neighborhood');
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#exampleInputEmail1').value.trim();
  const password = document.querySelector('#exampleInputPassword1').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/neighborhood');
    } else {
      alert('Failed to Sign up');
    }
  }
};

document
  .querySelector('.login-button')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup-button')
  .addEventListener('click', signupFormHandler);

