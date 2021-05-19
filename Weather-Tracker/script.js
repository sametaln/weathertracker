let cityRequest = document.querySelector('.city');
let button = document.querySelector('.get');
let degree = document.querySelector('.degree');
let cityName = document.querySelector('.cityname');
let weather = document.querySelector('.weather')


let API_KEY = "626758ccaa161d95b04d9eec85e2f8bb"

button.addEventListener('click', () => {
    const city = cityRequest.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        degree.textContent = ' '
        cityName.textContent = ' '
        weather.textContent = ' '

        console.log(data)

        degree.innerHTML = `<p class="degree">${Math.floor(data.main.temp)}<span>&#8451;</span></p>`
        cityName.innerHTML = `<div class="cityname"><p>${data.name}</p></div>`
        weather.innerHTML = `<p1 class="weather">${data.weather[0].main}</p1>`
    })
})