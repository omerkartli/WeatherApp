const API_URL = 'http://api.weatherapi.com/v1/'
const key = 'a528639a7c7242d5bb755022230202'

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

document.getElementById('search-bar').onclick = function () {
    console.log('clicked')
     window.location.href = 'search.html';
}

const displayResult = (result) => {
    console.log(result)
    let date = new Date();
    let date1 = document.querySelector('.date')
    date1.innerText = date.toLocaleString('en-US', {
        weekday: 'long'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + ' ' + date.toLocaleString('en-US', {
        month: 'short'
    }) + ' ' + date.toLocaleString('en-US', {
        year: 'numeric'
    }) + ' | ' + date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    })

    let iconimg = document.querySelector('.icon-image')
    iconimg.src = `${(result.current.condition.icon)}`

    let desc = document.querySelector('.description')
    desc.innerText = `${result.current.condition.text}`

    let tempe = document.querySelector('.temperature-value')
    tempe.innerText = `${Math.round(result.current.temp_c)}`
    let tempeSym = document.querySelector('.degree-icon')
    tempeSym = `°C`

    let maxarr = document.querySelector('.max-temperature')
    maxarr.innerText = `${Math.round(result.forecast.forecastday[0].day.maxtemp_c)}°C`

    let minarr = document.querySelector('.min-temperature')
    minarr.innerText = `${Math.round(result.forecast.forecastday[0].day.mintemp_c)}°C`

    let humi = document.querySelector('.humidity')
    humi.innerText = `${result.current.humidity}%`

    let pres = document.querySelector('.pressure')
    pres.innerText = `${result.current.pressure_mb}mBar`

    let wind = document.querySelector('.wind')
    wind.innerText = `${result.current.wind_kph}km/h`

    let sunrise = document.querySelector('.sunrise')
    sunrise.innerText = `${result.forecast.forecastday[0].astro.sunrise}`

    let sunset = document.querySelector('.sunset')
    sunset.innerText = `${result.forecast.forecastday[0].astro.sunset}`

    ///////-----------DayTime----------------////////////
    const convertTime12to24h = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}`;
    }
    
    const convertTime12to24m = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${minutes}`;
    }

    let sunset24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunset}`);
    let sunset24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunset}`);
    let sunrise24h = convertTime12to24h(`${result.forecast.forecastday[0].astro.sunrise}`);
    let sunrise24m = convertTime12to24m(`${result.forecast.forecastday[0].astro.sunrise}`);
    let sunsettime = new Date(null, null, null, sunset24h, sunset24m);
    let sunrisetime = new Date(null, null, null, sunrise24h, sunrise24m);

    var now = new Date();
    if (now.getHours() > sunrisetime.getHours() && now.getHours() < sunsettime.getHours()) {
        let dayimg = document.querySelector('.day')
        dayimg.src = "./images/graphicday.png"
        document.body.className += "day";
    } else {
        let nightimg = document.querySelector('.day')
        nightimg.src = "./images/graphicnight.png"
        document.body.className += "night";
    }
    let delta = Math.abs(sunrisetime - sunsettime) / 1000;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    let daytime = document.querySelector('.daytime') 
    daytime.innerText = `${hours}h ${minutes}m`

    ////////--------------Daytime------/////////

    let iconimgnd1 = document.querySelector('.icon-image1')
    iconimgnd1.src = `${(result.forecast.forecastday[1].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay1 = document.querySelector('.next-day1')
    nextDay1.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[1].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[1].day.mintemp_c)}°C↓`

    let iconimgnd2 = document.querySelector('.icon-image2')
    iconimgnd2.src = `${(result.forecast.forecastday[2].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay2 = document.querySelector('.next-day2')
    nextDay2.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[2].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[2].day.mintemp_c)}°C↓`

    let iconimgnd3 = document.querySelector('.icon-image3')
    iconimgnd3.src = `${(result.forecast.forecastday[3].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay3 = document.querySelector('.next-day3')
    nextDay3.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[3].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[3].day.mintemp_c)}°C↓`

    let iconimgnd4 = document.querySelector('.icon-image4')
    iconimgnd4.src = `${(result.forecast.forecastday[4].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay4 = document.querySelector('.next-day4')
    nextDay4.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[4].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[4].day.mintemp_c)}°C↓`

    let iconimgnd5 = document.querySelector('.icon-image5')
    iconimgnd5.src = `${(result.forecast.forecastday[5].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay5 = document.querySelector('.next-day5')
    nextDay5.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[5].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[5].day.mintemp_c)}°C↓`

    let iconimgnd6 = document.querySelector('.icon-image6')
    iconimgnd6.src = `${(result.forecast.forecastday[6].day.condition.icon)}`

    date.setDate(date.getDate() + 1);
    let nextDay6 = document.querySelector('.next-day6')
    nextDay6.innerText = date.toLocaleString('en-US', {
        weekday: 'short'
    }) + ', ' + date.toLocaleString('en-US', {
        day: 'numeric'
    }) + `\n ${Math.round(result.forecast.forecastday[6].day.maxtemp_c)}°C↑` +
        `   ${Math.round(result.forecast.forecastday[6].day.mintemp_c)}°C↓`
}

function getResult(cityName){
    console.log(cityName);
    let query = `${API_URL}forecast.json?q=${cityName}&days=7&key=${key}`
    console.log(query)
    fetch(query)
        .then(weather => {
            console.log(typeof (weather))
            return weather.json()
        })
        .then(displayResult)
}

if (params.city) {
    let searchBar = document.getElementById('search-bar')
    searchBar.value = params.city;
    this.getResult(params.city)
}

