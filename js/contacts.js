const signupForm = document.querySelector('.signup-form')
const username = document.querySelector('.username')
const firstname = document.querySelector('.firstname')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
  
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(username.value);
    username.value = ''
})


const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length)
        color += values[randomNumber]
    }
    
    return color
}

function setGradient() {
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
        )`
        
        body.style.background = bgColor
        
    }
    
    setGradient()
    
    function chiqarish() {
        console.log(`Kontakt web-sayt ga chiqarildi`);
        var outputElement = document.getElementById("output");
        outputElement.innerHTML = `${username.value} ${firstname.value}`;
      }

          function handleSubmit(event) {
      event.preventDefault(); // Prevent page refresh
      //console.log("Form submitted, page not refreshed.");
      // Other operations...
    }