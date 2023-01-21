let input = prompt("Пожалуйста введите число:");
let total = 0;
for (input; typeof input == "string"; input) {
    if (!isNaN(Number(input)) && input.trim().length !== 0) {
      total += Number(input);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
    input = prompt("Пожалуйста введите число:");
  }

  alert(`Общая сумма чисел равна ${total}`)

// let total = 0;
// for ( let input ; input = 1; input = prompt("Please enter a number:")) {
//      if (input) {
//         let num=(Number(input));
        
//         if (Number.isNaN(num)) {
//             alert("Было введено не число, попробуйте еще раз");
//         } else {
//             total += Number(input);
            
//         }
//     }
// }
// alert(`Общая сумма чисел равна ${total}`);


// let input;
// let total = 0;
// while (input !== null) {
//     input = prompt("Please enter a number:");
//     if (input !== null) {
//         let num=(Number(input));
        
//         if (Number.isNaN(num)) {
//             alert("Было введено не число, попробуйте еще раз");
//         } else {
//             total += Number(input);
//             total += num;
//         }
//     }
// }
// alert(`Общая сумма чисел равна ${total}`);
