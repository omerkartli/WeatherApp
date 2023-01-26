
const API_URL = 'http://api.weatherapi.com/v1/'
const key = 'a6d278e70e964ac4ac464022231801'


const locationsGiven = document.querySelector("[SnLocation]")

const setQuery = (e) => {
         if(e.keyCode =='13'){
         getResult(SsearchBar.value)
    }}
const getResult = (cityName) => {
    let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`
    fetch(query)
    .then(res => res.json())
    .then(data => {
        const gelenkonum = locationsGiven.textContent.clone(true).children[0]
        console.log(gelenkonum)
    })
}

const SsearchBar=document.getElementById('SsearchBar')
SsearchBar.addEventListener('keypress',setQuery)




// let cities=[]

// const setQuery = (e) => {
//     if(e.keyCode =='13'){
//     getResult(SsearchBar.value)
// }}
// const getResult = (cityName) => {
//     // console.log(cityName);
//     let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`
//     console.log(query)
//     fetch(query)
//     .then(weather => {
//         return weather.json()
//     })
//     .then(displayResult)
// }

// function displayResult () {
//     debugger;
//     let x= document.getElementById('SsearchBar');
//     console.log(JSON.stringify(x.value));//jsona burdan bak let loca = document.querySelector('.SLocation')//class adı location
//     // loca.innerText = `${result.location.name}, ${result.location.country}`//jsondan kontrol et bak nerdec   
// }     


// const SsearchBar=document.getElementById('SsearchBar')
// SsearchBar.addEventListener('keypress',setQuery)
