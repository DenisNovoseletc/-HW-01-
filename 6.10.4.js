const name = prompt('Введите имя:');
const yearBirth = +prompt('Введите ваш год рождения:');
const currentYear = new Date().getFullYear();
age = currentYear - yearBirth;
let ageSuffix;
let remainingYears = age % 10;
if(remainingYears === 0 || age > 10 && age < 14) {
ageSuffix = 'лет';
}
else if (remainingYears < 2) {
    ageSuffix = 'год';
} else if (remainingYears < 5) {
    ageSuffix = 'года';
} else {
    ageSuffix = 'лет';
}
alert(`${name}:${age} ${ageSuffix}`);