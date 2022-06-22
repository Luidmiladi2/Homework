// создать переменную "item_1" присвоить ей цифру 5
let item_1 = 5;
// вывести в консоль item_1
console.log(item_1);

// создать переменную "item_2" присвоить ей цифру 3
let item_2 = 3;
//вывести в консоль item_2
console.log(item_2);

// создать переменную "item_3"
//присвоить item_3 сложение item_1 и item_2.
let item_3 = item_1 + item_2;
//dывести в консоль item_3.
console.log("item_3 =", item_3);

//присвоить переменной item_4 строку “Yolochka”
let item_4 = "Yolochka";
//вывести в консоль item_4.
console.log(item_4);
//вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4);
//вывести в консоль умножение item_3 и item_4.
console.log(item_3 * item_4);

//создать переменную “item_5”
//присвоить переменной item_5 переменную item_3
let item_5 = item_3;

// создать переменную item_6
let item_6;
//создать переменную item_6_type
let item_6_type;
//присвоить переменной item_6 значение 15
item_6 = 15;
//присвоить переменной item_6_type тип переменной item_6
item_6_type = typeof item_6;
//вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
console.log("item_6 ==", item_6 + "\n" + "item_6_type ==", item_6_type);

//создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7 = String(item_6);
// создать переменную item_7_type
// присвоить переменной item_7_type тип переменной item_7
item_7_type = typeof item_7;
//Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7 ==", item_7 + "\n" + "item_7_type ==", item_7_type);

// Создать переменную “age_1” и присвоить ей значение 10
// Создать переменную “age_2” и присвоить ей значение 18
// Создать переменную “age_3” и присвоить ей значение 60
// Создать if в котором будите проверять значение переменной age_1
// Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// Иначе выводите “Technical work”.

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
if (age_1 < age_2) {
    console.log("You dont't have access cause you age is", age_1  + " " + "It's less then")
} else  if (age_1 >= age_2 && age_1 < age_3) {
    console.log("welcome")
} else if (age_1 > age_3){
    console.log("Keep calm and look Culture channel")
} else {
     console.log("Technical work")
    }
    