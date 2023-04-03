// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

const tempCelsius = parseFloat(prompt("Введите температуру в градусах Цельсия: "));
 function toFarenheit (a){
    const cel = (9 / 5) * a + 32;
    return cel;
 }
 alert(Math.round(toFarenheit(tempCelsius)));
//  округление до ближайшего целого

alert(Math.floor(toFarenheit(tempCelsius)));
//  округление в меньшую сторону

alert(Math.ceil(toFarenheit(tempCelsius)));
//  округление в большую сторону