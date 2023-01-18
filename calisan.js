
const API_URL = 'http://api.weatherapi.com/v1/'
const key = 'a6d278e70e964ac4ac464022231801'

const setQuery = (e) => {
    if(e.keyCode =='13'){
    getResult(searchBar.value)
}}
const getResult = (cityName) => {
    // console.log(cityName);
    let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`
    console.log(query)
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);//jsona burdan bak

    let date = document.querySelector('.Date')
    date.innerText = new Date('Sunday, 19 May, 2019')

    let loca = document.querySelector('.Location')//calas adı location
    loca.innerText = `${result.name}, ${result.sys.country}`//jsondan kontrol et bak nerdec

    let desc = document.querySelector('.Description')
    desc.innerText = `${result.weather[0].description}`

    let tempe = document.querySelector('.Temperature')
    tempe.innerText = `${Math.round(result.main.temp)}°C`

    let minmax = document.querySelector('.MaxMin')
    minmax.innerText = `${Math.round(result.main.temp_max)} / ${Math.round(result.main.temp_min)}`

    let humi = document.querySelector('.Humidity')
    humi.innerText = `${result.main.humidity}%`

    let pres = document.querySelector('.Pressure')
    pres.innerText = `${result.main.pressure}mBar`

    let wind = document.querySelector('.Wind')
    wind.innerText = `${result.wind.speed}km/h`

    let sunrise = document.querySelector('.Sunrise')
    sunrise.innerText = `${result.sys.sunrise}`//bunu saat formatına çevir

    let sunset = document.querySelector('.Sunset')
    sunset.innerText = `${result.sys.sunset}`//bunu saat formatına çevir

    let daytime = document.querySelector('.Daytime') // Gün uzunluğunu dt emin değilim
    daytime.innerText = `${result.dt/86400000}`//bunu sunset-sunrise da yapılabilir

    


}


const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
