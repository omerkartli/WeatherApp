const source = document.getElementById('input');
const result = document.getElementById('result');


const inputHandler = function(e) {
  result.innerHTML = e.target.value;
}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler);