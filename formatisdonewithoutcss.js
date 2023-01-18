
// const API_URL = 'http://api.weatherapi.com/v1/'
// const key = 'a6d278e70e964ac4ac464022231801'

// const setQuery = (e) => {
//     if(e.keyCode =='13'){
//     getResult(searchBar.value)
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

// const displayResult = (result) => {
//     console.log(result);//jsona burdan bak
//     let date = new Date();
//     let date1 = document.querySelector('.Date')
//     date1.innerText = date.toLocaleString('en-US', { 
//         weekday: 'long'
//     })+', '+date.toLocaleString('en-US', {
//         day: 'numeric'
//     })+' '+date.toLocaleString('en-US', {
//         month: 'short' 
//     })+' '+date.toLocaleString('en-US', {
//         year: 'numeric'
//     })+' | '+date.toLocaleString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric'
//     })

//     let loca = document.querySelector('.Location')//calas adı location
//     loca.innerText = `${result.location.name}, ${result.location.country}`//jsondan kontrol et bak nerdec

//     let desc = document.querySelector('.Description')
//     desc.innerText = `${result.current.condition.text}`

//     let tempe = document.querySelector('.Temperature')
//     tempe.innerText = `${Math.round(result.current.temp_c)}°C`

//     let minmax = document.querySelector('.MaxMin')
//     minmax.innerText = `${Math.round(result.forecast.forecastday[0].day.maxtemp_c)} / ${Math.round(result.forecast.forecastday[0].day.mintemp_c)}`

//     let humi = document.querySelector('.Humidity')
//     humi.innerText = `${result.current.humidity}%`

//     let pres = document.querySelector('.Pressure')
//     pres.innerText = `${result.current.pressure_mb}mBar`

//     let wind = document.querySelector('.Wind')
//     wind.innerText = `${result.current.wind_kph}km/h`

//     let sunrise = document.querySelector('.Sunrise')
//     sunrise.innerText = `${result.forecast.forecastday[0].astro.sunrise}`//bunu saat formatına çevir

//     let sunset = document.querySelector('.Sunset')
//     sunset.innerText = `${result.forecast.forecastday[0].astro.sunset}`//bunu saat formatına çevir




//     ////-----------DayTime----------------////////////
//     const convertTime12to24h = (time12h) => {
//         const [time, modifier] = time12h.split(' ');
          
//         let [hours, minutes] = time.split(':');
          
//         if (hours === '12') {
//               hours = '00';
//         }
          
//         if (modifier === 'PM') {
//               hours = parseInt(hours, 10) + 12;
//         }
          
//         return `${hours}`;
//         }
//     const convertTime12to24m = (time12h) => {
//         const [time, modifier] = time12h.split(' ');
          
//         let [hours, minutes] = time.split(':');
          
//         if (hours === '12') {
//               hours = '00';
//          }
          
//         if (modifier === 'PM') {
//             hours = parseInt(hours, 10) + 12;
//         }  
//         return `${minutes}`;
//         }
//     let sunset24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunset}`);
//     let sunset24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunset}`);
//     let sunrise24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunrise}`);
//     let sunrise24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunrise}`);
//     let sunsettime = new Date(null, null, null, sunset24h, sunset24m);
//     let sunrisetime = new Date(null, null, null, sunrise24h, sunrise24m);
        
//     let delta = Math.abs(sunrisetime - sunsettime) / 1000;
    
//     let hours = Math.floor(delta / 3600) % 24;
//         delta -= hours * 3600;
    
//     let minutes = Math.floor(delta / 60) % 60;
//         delta -= minutes * 60;
        
//     console.log(hours,minutes)
    
//     ////--------------Daytime-------------////////////
//     let daytime = document.querySelector('.Daytime') // Gün uzunluğunu dt emin değilim
//     daytime.innerText = `${hours}h ${minutes}m`//bunu sunset-sunrise da yapılabilir

    
//     date.setDate(date.getDate() + 1);
//     let nextDay1 = document.querySelector('.NextDay1')
//     nextDay1.innerText = `${result.forecast.forecastday[1].day.condition.text} \n`
//     + date.toLocaleString('en-US', { 
//         weekday: 'short'
//     })+', '+date.toLocaleString('en-US', {
//         day: 'numeric'
//     })+`\n ${Math.round(result.forecast.forecastday[1].day.maxtemp_c)}` +
//     ` / ${Math.round(result.forecast.forecastday[1].day.mintemp_c)}`

    
//     date.setDate(date.getDate() + 1);
//     let nextDay2 = document.querySelector('.NextDay2')
//     nextDay2.innerText = `${result.forecast.forecastday[2].day.condition.text} \n`
//     + date.toLocaleString('en-US', { 
//         weekday: 'short'
//     })+', '+date.toLocaleString('en-US', {
//         day: 'numeric'
//     })+`\n ${Math.round(result.forecast.forecastday[2].day.maxtemp_c)}` +
//     ` / ${Math.round(result.forecast.forecastday[2].day.mintemp_c)}`



//     date.setDate(date.getDate() + 1);
//     let nextDay3 = document.querySelector('.NextDay3')
//     nextDay3.innerText = `${result.forecast.forecastday[3].day.condition.text} \n`
//     +date.toLocaleString('en-US', { 
//         weekday: 'short'
//     })+', '+date.toLocaleString('en-US', {
//         day: 'numeric'
//     })+`\n ${Math.round(result.forecast.forecastday[3].day.maxtemp_c)}` +
//     ` / ${Math.round(result.forecast.forecastday[3].day.mintemp_c)}`

// }     


// const searchBar=document.getElementById('searchBar')
// searchBar.addEventListener('keypress',setQuery)
