const API_URL = 'https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text'

function searchWeather() {

  const searchTerm = document.getElementById("search-input").value;
  if (searchTerm.length < 2) return;//if press enter 2 letter is without enter 3 letter is enough
  let query = `${API_URL}=${searchTerm}`
  console.log(query)
  fetch(query)
    .then(response => response.json())
    .then(displayResult)
};
const displayResult = (results) => {
  console.log(results);
  let result = results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))//sort the cities
  console.log(result);

  const output = [...result].reduce((acc, curr) => {
    const idx = acc.findIndex(e => e.alphabet === curr.city[0]);
    if (idx === -1) {
      acc.push({ alphabet: curr.city[0], cities: [curr.city] });
    }
    else {
      acc[idx].cities.push(curr.city);
      acc[idx].cities.sort((r1, r2) => r1.city > r2.city ? 1 : -1);
    }
    return acc;
  }, []).sort();

  console.log(output)

  for(let i=0; i<output.length; i++){
    let alph = output[i].alphabet;
    let listL = document.getElementById("myListL");
    let liL = document.createElement("li");
    liL.innerText = alph;
    listL.appendChild(liL); 
    
    let b=output[i].cities.length
    for(let j=0; j<b; j++){
      let data = output[i].cities[j];
      let list = document.getElementById("myList");
      let li = document.createElement("li");
      li.innerText = data;
      list.appendChild(li);

    }
  
    
  }
}


