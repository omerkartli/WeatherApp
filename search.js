const API_URL2 = 'https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text'

function searchWeather() {

  const searchTerm = document.getElementById("search-input").value;
  if (searchTerm.length < 3) return;//if press enter 2 letter is without enter 3 letter is enough
  let query = `${API_URL2}=${searchTerm}`
  console.log(query)
  fetch(query)
    .then(response => response.json())
    .then(displayResult2)
};
const displayResult2 = (results) => {

  console.log('display')

  let result = results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))//sort the cities
  console.log(result);

  const output = [...result].reduce((acc, curr, i, k) => {
    const idx = acc.findIndex(e => e.alphabet === curr.city[0]);
    if (idx === -1) {
      acc.push({ alphabet: curr.city[0], cities: [`${curr.city}, ${curr.country}`] });
    }
    else {
      acc[idx].cities.push(`${curr.city}, ${curr.country}`);
      acc[idx].cities.sort((r1, r2) => r1.city > r2.city ? 1 : -1);
    }
    return acc;
  }, []).sort();

  console.log(output)

  let listL = document.getElementById("myListOutput");
  listL.innerHTML = "";

  for (let i = 0; i < output.length; i++) {

    let alphabet = document.createElement("li");
    alphabet.innerText = output[i].alphabet[0];
    alphabet.style.marginBottom = "17px"
    alphabet.style.marginTop = "5px"
    alphabet.style.fontSize = "40px";
    alphabet.style.color = " #AAAAAA";
    alphabet.style.fontFamily = "Barlow";
    alphabet.style.fontStyle = "normal";
    alphabet.style.fontWeight = 300;
    alphabet.style.fontSize = "40px";
    alphabet.style.lineHeight = "48px";
    alphabet.style.letterSpacing = "-0.5em";
    alphabet.style.listStyleType = "none"
    listL.appendChild(alphabet);

    for (let j = 0; j < output[i].cities.length; j++) {

      let citiess = document.createElement("li");
      let link = document.createElement("a");
      const first = output[i].cities[j].split(',')[0]//first value City name
      // console.log(first);
      link.setAttribute("href", `index.html?city=${first}`)
      link.innerText = output[i].cities[j];
      citiess.appendChild(link)
      citiess.style.marginBottom = "5px"
      citiess.style.listStyleType = "none";
      link.style.textDecoration = "none";
      link.style.textAnchor = "none";
      link.style.color = "#444444"
      citiess.style.textDecoration = "none";
      link.style.fontFamily = 'Barlow';
      link.style.fontStyle = "normal";
      link.style.fontSize = "18px";
      link.style.lineHeight = "22px";
      link.style.fontWeight = "400";
      link.style.letterSpacing = "-0.05em";
      listL.appendChild(citiess)
    }

  }
}


