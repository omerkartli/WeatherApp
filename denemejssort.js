/* // const items = {"data":[{"name":"john"},{"name":"james"},{"name":"joe"},{"name":"brian"},{"name":"bojan"},{"name":"billy"},{"name":"dean"},{"name":"darren"},{"name":"doug"}]};

// // `reduce` over the data to produce an object
// // with letter keys, and array values where the names are added



// const obj = items.data.reduce((acc, c) => {
//   const letter = c.name[0];
//   acc[letter] = (acc[letter] || []).concat(c.name);
//   return acc;
// }, {})

// // `map` over the object entries to return an array of objects
// items.data = Object.entries(obj).map(([letter, names]) => {
//   return { letter, names }
// }).sort((a, b) => a.letter > b.letter);

// console.log(items);

const items = {
    "data": [
     {
       "name" : "john"
     },
     {
       "name" : "james"
     },
     {
       "name" : "joe"
     },
     {
       "name" : "brian"
     },
     {
       "name" : "bojan"
     },
     {
       "name" : "billy"
     },
     {
       "name" : "dean"
     },
     {
       "name" : "darren"
     },
     {
     "name" : "doug"
     }
   ]
   }
   
   const transformed = {
     data:[]
   }
   
   const findByLetter = (letter) => (element) => element.letter === letter; 
   
   
   
   for(let i = 0; i < items.data.length; i++){
   
     const letter = items.data[i].name.split("")[0];
     const elIndex = transformed.data.findIndex(findByLetter(letter));
     if(elIndex > -1){
   
    transformed.data[elIndex].names.push(items.data[i].name);
     }else{
      
     transformed.data.push({
       letter,
       names: [items.data[i].name],
     });
     }
     
   };
   
   console.log(transformed);
    */

// const employees = [{ name: "Abigail", age: "25" }, { name: "Axle", age: "29" }, { name: "Brianna", age: "25" }, { name: "Brooklyn", age: "23" }, { name: "Camila", age: "24" }, { name: "Charlotte", age: "28" }, { name: "David", age: "22" }];

// const output = employees
//     .reduce((acc, curr) => {
//         const idx = acc.findIndex(e => e.alphabet === curr.name[0]);
//         if (idx === -1) {
//             acc.push({ alphabet: curr.name[0], record: [curr] });
//         }
//         else {
//             acc[idx].record.push(curr);
//             acc[idx].record.sort((r1, r2) => r1.name > r2.name ? 1 : -1);
//         }
//         return acc;
//     }, [])
//     .sort((e1, e2) => e1.alphabet > e2.alphabet ? 1 : -1);

// console.log(output);


// let result = results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))//sort the cities

  // const transformed = {
  //   result:[]
  // }  
  // const findByLetter = (letter) => (element) => element.letter === letter; 
  // for(let i = 0; i < result.length; i++){
  //   const letter = result[i].city.split("")[0];
  //   const elIndex = transformed.result.findIndex(findByLetter(letter));
  //   if(elIndex > -1){
  //     transformed.result[elIndex].cities.push(result[i].city);
  //   }else{

  //   transformed.result.push({
  //     letter,
  //     cities: [result[i].city],
  //   });
  //   }
  // };
  // console.log(transformed)



  // const transformed = {
  //   data:[]
  // }  
  // const findByLetter = (letter) => (element) => element.letter === letter; 
  // for(let i = 0; i < results.data.length; i++){
  //   const letter = results.data[i].city.split("")[0];
  //   const elIndex = transformed.data.findIndex(findByLetter(letter));
  //   if(elIndex > -1){

  //  transformed.data[elIndex].names.push(items.data[i].city);
  //   }else{

  //   transformed.data.push({
  //     letter,
  //     names: [results.data[i].city],
  //   });
  //   }

  // };

  // console.log(transformed);



  /////////////////////metod 11111/////////////////////////////
  // let res = [...result].reduce((acc, item) => {
  //   let l = item.city[0];
  //   if (!l.includes(acc[0])) {
  //     acc.push({ 'letter': l, cities: [] });
  //   }
  //   acc.filter(e => e.letter === l)[0].cities.push(item.city);
  //   return acc;
  // }, { "city": [] })

  // console.log(res)


///************************************Güzelllllllllllll *////////////////////////////////

  ///-------hepsini alan ama büyük olarak üste alma problem tek divde veriyor liste şeklinde değil------//////
  // let local = '';
  // for (let i=0; i < result.length-1; i++) {
  //   local += `${result[i].city}, ${result[i].country} ` + "<br>";
  // }
  // document.querySelector('.Result2').innerHTML = local;
  // console.log(typeof(local))









  // // `map` over the object entries to return an array of objects
  // results.data = Object.entries(obj).map(([letter, names]) => {
  //   return { letter, names }
  // }).sort((a, b) => a.letter > b.letter);

  // console.log(results);






  // let textFC = ""; 
  // for (let i=0; i < result.length-1; i++){
  //   console.log(result)
  //   textFC = local[0]
  //   // if (result[i].city[0]==result[i+1].city[0]){
  //   //   textFC = result[i+1].city[0]
  //   //    }
  // }
  // document.querySelector('.Result2FC').innerHTML = textFC

  // let dizo = ""
  // let dizo2 = ""
  // for (let i=0; i < (result.length)-1; i++){
  //   c = result[i].city[0]
  //   d = result[i+1].city[0]
  //   if (c == d){
  //     dizo2 = result[i].city[0]
  //   }
  //   else{
  //     let dizo = []
  //   }
  // }
  // document.querySelector('.Result2FC').innerHTML = dizo2;




  

  // if( result.length < 2 ) return;//  protect from result error
  // let loca2 = document.querySelector('.Result3')//class adı location
  // let loca22 = loca2.innerText = `${result[1].city}, ${result[1].country}`
  // let locaFC3 = document.querySelector('.Result3FC')
  // if (loca11[0] != loca22[0]){
  //     locaFC3.innerHTML = `${loca22[0]}`
  // }

  // if( result.length < 3 ) return;
  // let loca3 = document.querySelector('.Result4')//class adı location
  // let loca33 = loca3.innerText = `${result[2].city}, ${result[2].country}`
  // let locaFC4 = document.querySelector('.Result4FC')
  // if (loca22[0] != loca33[0]){
  //     locaFC4.innerHTML = `${loca33[0]}`
  // }

  // if( result.length < 4 ) return;
  // let loca4 = document.querySelector('.Result5')//class adı location
  // let loca44 = loca4.innerText = `${result[3].city}, ${result[3].country}`
  // let locaFC5 = document.querySelector('.Result5FC')

  // if (loca33[0] != loca44[0]){
  //   locaFC5.innerHTML = `${loca44[0]}`
  // }

  // if( result.length < 5 ) return;
  // let loca5 = document.querySelector('.Result6')//class adı location
  // let loca55 = loca5.innerText = `${result[4].city}, ${result[4].country}`
  // let locaFC6 = document.querySelector('.Result6FC')

  // if (loca44[0] != loca55[0]){
  //   locaFC6.innerHTML = `${loca55[0]}`
  // }


  // if( result.length < 6 ) return;
  // let loca6 = document.querySelector('.Result7')//class adı location
  // let loca66 = loca6.innerText = `${result[5].city}, ${result[5].country}`
  // let locaFC7 = document.querySelector('.Result7FC')

  // if (loca55[0] != loca66[0]){
  //   locaFC7.innerHTML = `${loca66[0]}`
  // }


  // if( result.length < 7 ) return;
  // let loca7 = document.querySelector('.Result8')//class adı location
  // let loca77 = loca7.innerText = `${result[6].city}, ${result[6].country}`
  // let locaFC8 = document.querySelector('.Result8FC')

  // if (loca66[0] != loca77[0]){
  //   locaFC8.innerHTML = `${loca77[0]}`
  // }


  // if( result.length < 8 ) return;
  // let loca8 = document.querySelector('.Result9')//class adı location
  // let loca88 = loca8.innerText = `${result[7].city}, ${result[7].country}`
  // let locaFC9 = document.querySelector('.Result9FC')

  // if (loca77[0] != loca88[0]){
  //   locaFC9.innerHTML = `${loca88[0]}`
  // }


  // if( result.length < 9 ) return;
  // let loca9 = document.querySelector('.Result10')//class adı location
  // let loca99 = loca9.innerText = `${result[8].city}, ${result[8].country}`
  // let locaFC10 = document.querySelector('.Result10FC')

  // if (loca88[0] != loca99[0]){
  //   locaFC10.innerHTML = `${loca99[0]}`
  // }





  
// let result = results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))//sort the cities