const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key in obj) {
    // Проверяем, является ли значение массивом
    if (Array.isArray(obj[key])) {
        // Если это массив, добавляем его элементы в arrValues
        arrValues.push(...obj[key]); // Используем оператор расширения для добавления элементов
    } else {
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);