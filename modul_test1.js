// Задине 1. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
// и значения только собственных свойств. Данная функция не должна возвращать значение.
const lab = {
    acid: 'nitric',
    alkali: 'sodium',
    salt: 'magnesium sulfate',
}

const labwork = Object.create(lab);

labwork.onwAcid = 'hydrachloric';
labwork.onwAlkali = 'potassium';
labwork.onwSalt = 'silver nirate';

for(let key in labwork) {
    if(labwork.hasOwnProperty(key)){
        console.log(labwork)

    }
}

console.log(labwork.acid)
console.log(Object.getPrototypeOf(labwork))


// //выводит все собственные ключи
// const lab = {
//     acid: 'nitric',
//     alkali: 'sodium',
//     salt: 'magnesium sulfate',
//
// }
//
// const labwork = Object.create(lab);
//
// labwork.onwAcid = 'hydrachloric';
// labwork.onwAlkali = 'potassium';
// labwork.onwSalt = 'silver nirate';
//
// const printLogHasOwnLabwork = (acid) => {
//     for (let key in acid) {
//         if (acid.hasOwnProperty(key)) {
//             console.log(key);
//         }
//     }
//
// }
// printLogHasOwnLabwork(lab);