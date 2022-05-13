//2. Aufgabe: Написать функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
function sum(x1,y1) {
    console.log(x1+y1);

}
let amount = '3 mole substance'
const substance = {
    acid: 'hydrachloric',
    alkali: 'sodium'

};
console.log('acid' in substance)

const key = 'acid'
sum(amount, substance[key]) 