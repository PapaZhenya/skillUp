let credits = 23580;
let pricePerDroid = 3000;
const amount = prompt();
let message;
let totalPrice;

if (amount === null) {
    message = 'Скасовано користувачем!'
}else{
    totalPrice = pricePerDroid * amount
    totalPrice > credits
    console.log('Недостатньо коштів на рахунку!')
}