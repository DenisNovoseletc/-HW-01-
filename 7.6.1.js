function isPalindrome(word) {
    // Приводим к нижнему регистру и убираем пробелы
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();
    const length = cleanedWord.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanedWord[i] !== cleanedWord[length - 1 - i]) {
            alert(`Слово "${word}" не является палиндромом`);
            return;
        }
    }
    alert(`Слово "${word}" является палиндромом`);
}

// Запрашиваем ввод у пользователя
const userInput = prompt("Введите слово или фразу для проверки на палиндром:");
isPalindrome(userInput);