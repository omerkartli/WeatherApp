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

  console.log('display')
  
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

    let listL = document.getElementById("myListOutput");
    listL.innerHTML = "";
  
    for (let i=0; i<output.length; i++){
      
      let alphabet = document.createElement("li");
      alphabet.innerText = output[i].alphabet[0];
      alphabet.style.fontSize = "x-large";
      alphabet.style.color = "grey"
      alphabet.style.listStyleType = "none"
      listL.appendChild(alphabet);
      // console.log(output[i].alphabet[0])

      for(let j=0; j<output[i].cities.length; j++){
      
        let citiess = document.createElement("li");
        let link = document.createElement("a");
        link.setAttribute("href", `index.html?city=${output[i].cities[j]}`)
        link.innerText = output[i].cities[j];
        citiess.appendChild(link)
        listL.appendChild(citiess)
        // citiess.appendChild(link).setAttribute("href", 'index.html');
        // console.log(output[i].cities[j])
      }
      
    }
  
    
  
}


