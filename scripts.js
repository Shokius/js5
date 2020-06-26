// Task 1

function Ramka(length){
    var frame = "";
    for (var i = 0; i < length; i++){
        frame += "*";
    }
    console.log(frame);
}

var row = [],
    groupN = prompt("Введите номер группы"),
    sername = prompt("Введите фамилию"),
    name1 = prompt("Введите имя"),
    patronymic = prompt("Введите отчество"),
    fio = sername + ' ' + name1 + ' ' + patronymic;
row.push("Домашняя работа \"Функции\"");
row.push("Выполнил студент гр." + groupN);
row.push(fio);

var framelength = 0;
for (var i = 0; i < row.length; i++){
    if (framelength < row[i].length){
        framelength = row[i].length;
    }
}

framelength += 2;

Ramka(framelength);
for (var i = 0; i < row.length; i++){
    var resultString = "*";
    for (var j = 0; j < framelength; j++){
        if (row[i][j] == undefined){
            if (j == framelength-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else{
            resultString += row[i][j];
        }
    }
    console.log(resultString);
}
Ramka(framelength);

console.log('');

// Task 2

console.log('Task 2');

function triangle () {
    var row = prompt("Введите количество рядов треугольника");
        array1 = [];
        array2 = [];

    for(let i = row; i > 0; i--) {

        for(var a = i; a >= 0; a--) {
            array2.push(' ');
        }

        for(var b = 0; b <= 1; b++) {
            array1.push('*');
        }

        var array11 = array1.join(''),
            array21 = array2.join('');

        console.log(array21 + array11.slice(1));

        var array2 = [];
    }
}
triangle();