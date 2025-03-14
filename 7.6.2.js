const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know']; 
const uniqueSet = new Set(arr); // Создаем Set, который удаляет дубликаты
const uniqueArr = Array.from(uniqueSet); // Преобразуем Set обратно в массив
console.log(uniqueArr); // Выводим массив уникальных значений