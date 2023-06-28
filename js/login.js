
const signupForm = document.querySelector('#signup-form')
const username = document.querySelector('#username')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
const copyMe = document.querySelector('.copyme')



function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Foydalanuvchi nomi va parolni tekshirish
    if (username === `${username.value}` && password === `${password.value}`) {
      alert("Kirish muvaffaqiyatli!");
      // Kirish muvaffaqiyatli bo'lsa, boshqa operatsiyalar bajarilishi mumkin
      // Masalan, sahifani boshqarish yoki yonalishni o'zgartirish
    } else {
      alert("Foydalanuvchi nomi yoki parol noto'g'ri!");
    }
  }

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
    console.log("Ro'yxatga kiritildi!");
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "Siz ro'yxatdan o'tdingiz";
  }
