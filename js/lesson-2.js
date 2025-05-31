//Task -1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push(rock - n - roll);
// const index = styles.indexOf("blues");
// if (index === -1) {
//   console.log("element not found");
// } else {
//   styles[index] = "classic";
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${arrey[i]}`);
//   }
// }

// logItems(styles);

// console.log(styles);

// for (const style of styles) {
//     console.log(style);
// }
// ce virne virishenya task-1

// Task-2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(logins) {
//   const userName = prompt("Будь ласка, введіть ваше ім'я:");
//   if (logins.includes(userName)) {
//     alert(`Welcome, ${userName}`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);
// ce virne virishennya tasky-2

// Task-3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       count++;
//       sum += arg;
//       console.log(sum);
//     }
//   }
// if(count === 0){
//     return 0;
// }
//   return sum / count;
// }
// console.log(caclculateAverage(1, 2, 3, "1"));
// ce virne rishenya task-3

// Task-7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// // user["mood"] = "happy"; mogno i takiu variant
// // const key = 'mood';  user[key] = 'heppy'; 3 variant
// user.hoppy = 'skydiving';
// user.premium = false;
// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]`});
// }

// v-2
//  const userArs = Object.enteries(user);
//  for (const arr of userArrs) {
//  console.log(`${arr[0]}: ${arr[1]}`);
//  }

// task-8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = 0;
const salariesKey = Object.values(salaries);
if (salariesKey.length > 0) {
  for (const value of salariesKey) {
    sum += value;
  }
}
// console.log(sum);

// Task-9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    }
    return "No such properties";
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    }
    return "No such properties";
  },
};

// pereglyanyti zapis task-9

// HW
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається
// name і email, category може передаватись чи ні,
// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;
// *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;
// const phonebook = {
//     contacts: [],
//     add(data) {},
//     list() {},
//     filtered(category) {},
//     delete(name) {},
//     updateName(oldName, newName) {},
//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };
