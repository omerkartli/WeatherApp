// // JavaScript code
// let displayList = ['Apples', 'Oranges', 'Grapes', 'Berries', 'Watermelon'];

//     fetch(`https://pokeapi.co/api/v2/pokemon`)
//     .then(function(response){
//         return response.json()
//     })
//     .then((data) => {
//         var list = document.getElementById("myList");
//         data.results.forEach((item) => {
//         displayList.push(item.name);
//             let li = document.createElement("li");
//             li.innerText = item.name;
//             list.appendChild(li);
          
//         })
//         console.log(displayList)
//     })
//     .catch((err) => {
//         console.log(`Error fetching: ${err}`)
//     });





// function search_animal() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('animals');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }
