const signupForm = document.querySelector('#signup-form')
const username = document.querySelector('#username')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(username.value)
})

username.addEventListener('click', (e) => {
    const valueToLog = username.value; // Store the value before clearing
    username.value = ''; // Clear the input value
    console.log(valueToLog); // Log the stored value
  });