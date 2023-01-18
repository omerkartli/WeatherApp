const API_URL = 'https://api.openweathermap.org/data/2.5/'
const key = '2220512fb8fc4a831ba15cc2aadb01d4'

const setQuery = (e) => {
    if(e.keyCode =='13'){
    getResult(searchBar.value)
}}
const getResult = (cityName) => {
    // console.log(cityName);
    let query = `${API_URL}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
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
    daytime.innerText = `${result.dt}`//bunu sunset-sunrise da yapılabilir

}

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)


////tarih ksımı

// const displayResult = (result) => {
//     console.log(result);//jsona burdan bak
//     let date = new Date();
//     let date1 = document.querySelector('.Date')
//     date1.innerText = (date.toLocaleString('en-US', {
//         month: 'short', // numeric, 2-digit, long, short, narrow
//         weekday: 'long', // long, short, narrow
//         day: 'numeric', // numeric, 2-digit
//         year: 'numeric', // numeric, 2-digit
//         hour: 'numeric', // numeric, 2-digit
//         minute: 'numeric', // numeric, 2-digit
//         //second: 'numeric', // numeric, 2-digit
//     }))