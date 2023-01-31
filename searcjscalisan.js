// const API_URL = 'http://api.weatherapi.com/v1/'
// const key = 'a6d278e70e964ac4ac464022231801'
const API_URL = 'https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text'

function searchWeather() {
  // Get the value of the input element
  const searchTerm = document.getElementById("search-input").value;
    
    // Make the API call
    let query=`${API_URL}=${searchTerm}`
    // let query = `${API_URL}forecast.json?q=${searchTerm}&days=7&key=${key}`
    console.log(query)
    fetch(query)
    .then(response => response.json())
    .then(data => {
        console.log(data)
      let cities = [...data].map(item => item.city);
      let domcity = [...data].map(item => item.country)
      console.log(domcity)
      console.log(cities)
      
      let cityDOM = document.getElementById("weather-output");
      cityDOM.innerHTML = cities ;
    })
    .then(displayResult)
    .catch(error => console.log(error));
      
};
const displayResult = (result) => {
    console.log(result);
}

// .then(data => {
    //   console.log(data)
    //   // let cities = [...data].map(item => item.city,item.country);
    //   let citiesAndCountries = [] ;
    //   [...data].forEach(item => citiesAndCountries.push(`${item.city}, ${item.country}`));
      
    //   console.log(citiesAndCountries)
    //   console.log(citiesAndCountries.length)
    //   console.log(typeof(citiesAndCountries))
    //   // console.log(cities)
      
    //   let cityDOM = document.getElementById("weather-output");
    //   cityDOM.innerHTML = `${citiesAndCountries}` ;
    // })
    
    // .catch(error => console.log(error));

