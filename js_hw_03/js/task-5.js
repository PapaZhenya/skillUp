// let colorYellow = "yellow"; 
// let colorRed = "red";
// let colorGreen = "green";

// let sygnal = "nsns";

// if(sygnal === "green"){
//     console.log("go")

// }else if (sygnal === 'yellow') {
//     console.log("wait");
    
// }else if(sygnal === "red"){
//     console.log("stop");
    
// }else{
//     console.log("mulfuction");
    
// }

// let a = [1,2,3,4];

// let b = [3,65,34,33,45,34,534,53,45,345];
// let max = b[0];
// for (let i = 0; i < b.length; i += 1){
//     if (b[i] > max){
//         max = b[i];
//     }
// }
// console.log('max ' + max);

// let b = [3,6];
// let sum = 0;
// for (let i = 0; i < b.length; i += 1){
//     sum = sum + b[i];
    
// }
// console.log('sum: ' + sum);


// методы массива filter

let people = [
    { id: "1", name: "bananes", age: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples",age: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato",age: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", age: 35, qty: 378, category: "vegetables" },
];

// const adults = [];
// for(let i = 0; i < people.length; i += 1){
//     if(people[i].age >=18){
//         adults.push(people[i])
//     }
// }
// console.log(adults);


const adults = people.filter(person => person.age >= 18); 
console.log(adults);

