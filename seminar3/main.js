// Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения чисел 5 и 2 равен 7.

// const number1 = Number.parseFloat(prompt(`Ведите число 1: `));
// const number2 = Number.parseFloat(prompt(`Ведите число 2: `));

// function sum(a,b){
//     return a+b;
//     } 
// alert(`Сумма чисел равна ${sum(number1,number2)}`);

/////////////////////////////////////////////

// Bывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const message = confirm("Вам хорошо живется?");
// if (message) {
//     alert(`Тогда мы идем к вам!`);
// } else {
//     alert(`Ну вы держитесь там! `);
// }

// const message = confirm("Вам хорошо живется?");
// message? alert(`Тогда мы идем к вам!`): alert(`Ну вы держитесь там! `);

/////////////////////////////////////////////

// const product = prompt("Ведите название продукта: ").toLowerCase();
// switch (product){
//     case "мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "бананы":       
//     case "груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }
 
/////////////////////////////////////////////

// const userInput = prompt("Введите числа через запятую: "). split(",").map(Number.parseFloat);

// function getMaxElement(arr){
//     let max=arr[0];
//     for (let i=2; i<arr.length;i+=2){
//         if (arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const result = getMaxElement(userInput);
// alert(result);
// console.log(userInput);

/////////////////////////////////////////////// 

