// auth.js

// Function to handle login submission
function handleLogin() {
    // Process login form data
    // Send login request to server
    // Process response from server
    // If login successful, redirect user to dashboard or homepage
    // If login fails, display error message to the user

    // For example, assuming login is successful, redirect to index.html
    window.location.href = "index.html";
}

// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    handleLogin(); // Call the login function
});

// Function to handle signup submission
// Replace the handleSignup() function with this simple redirect
// Function to handle signup submission
function handleSignup() {
    // Process signup form data
    // Send signup request to server
    // Process response from server
    // If signup successful, redirect user to dashboard or homepage
    // If signup fails, display error message to the user

    // For example, assuming signup is successful, redirect to index.html
    window.location.href = "index.html";
}

// Add event listener to the signup form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    handleSignup(); // Call the signup function
});
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

  
// auth.js

const loginForm = document.getElementById('login-form');  // Access form element

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Extract user input data (username, password)
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  // Logic for sending login request to server (replace with your implementation)
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Handle successful login (e.g., redirect to home page)
      console.log('Login successful');
    } else {
      // Handle login failure (e.g., display error message)
      const errorData = await response.json();
      console.error(errorData.message);
    }
  } catch (error) {
    console.error(error);
    // Handle network errors or other issues
  }
});





