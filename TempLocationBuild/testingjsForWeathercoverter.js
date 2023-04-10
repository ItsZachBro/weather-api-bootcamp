const getInfo = (e) => {
const city = document.getElementById('city').value
const state = document.getElementById('state').value
const country = document.getElementById('country').value
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=fd5c60d78a677d5dfe66577a9cf8044d&units=imperial`
    console.log(api)
    e.preventDefault()
    fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('displayCity').innerHTML = data.name 
        document.getElementById('displayWeather').innerHTML = data.main.temp 
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

document.querySelector('#button').addEventListener('click', getInfo)