
const API_URL = 'https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text=ist'


const locationInfoTemplate=document.querySelector("[data-location-info]")
let query = `${API_URL}`
console.log(query)
    fetch(query)
    .then(res => res.json())
    .then(data =>{
        const info = locationInfoTemplate.content.cloneNode(true).children[0]
        console.log(info)
    })


