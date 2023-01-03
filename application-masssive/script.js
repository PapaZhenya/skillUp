const animals = ['crab', 'dog', 'frog'];

function showArr(arr, elem){
    let out='';
    for(let i = 0; i < arr.length; i +=1){
        out += `<div><img src="images\\${arr[i]}.png"><span>${i}</span></div>`
    }
    document.querySelector(elem).innerHTML = out;

}

showArr(animals, '.out-1-source-image');
document.querySelector('out-1-source-length').innerHTML = 'Длинна массива' + animals.length;
document.querySelector('out-1-source').innerHTML = 'const animals=[' + animals + ']';

function addToArray(){
    let index = + document.querySelector('.array-index').value;
    animals[index] = + document.querySelector('.array-element').value;
    console.log(animals);

}

document.querySelector('.add-to-array').onclick = addToArray
