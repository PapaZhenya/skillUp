const checkPrompt = prompt();
const newStr = checkPrompt.toLowerCase();

const countryName = newStr[0].toUpperCase() + newStr.slice(1) ;
console.log(countryName)
switch (countryName) {
    case "Китай":
        console.log(`Доставка в Китай буде коштувати 100 кредитів`)
        break
    case "Чилі":
        console.log(`Доставка в Чилі буде коштувати 250 кредитів`)
        break
    case "Австралія":
        console.log(`Доставка в Австралія буде коштувати 170 кредитів`)
        break
    case "Індія":
        console.log(`Доставка в Індія буде коштувати 80 кредитів`)
        break
    case "Ямайка":
        console.log(`Доставка в Ямайка буде коштувати 120 кредитів`)
        break
    default:
        alert('У вашій країні доставка недоступна')
}


