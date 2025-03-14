const field = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'], 
    ['x', 'o', 'x']  
];
for (let i = 0; i < field.length; i++) {
    // Метод join(' ') объединяет элементы массива в строку, добавляя пробел между ними
    console.log(field[i].join(' ')); 
}