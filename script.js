"use strict";

/* console.log('start'); // виводить start

// створюємо проміс, колбек, який передали в new Promise виконується одразу
const promise1 = new Promise((resolve, reject) => {
console.log(1) // виведе 1
resolve(2) // проміс переходить в стан "виконано" з результатом 2, але
})

// .then виконується після того, як завершаться усі синхронні операції
promise1.then(res => {
console.log(res)
})

// виведе end
console.log('end'); */

/* результат:
start
1
end
2 */

/* // створюємо проміс, який одразу ж вирішується (resolve) зі значенням 1
Promise.resolve(1)
  .then((x) => x + 1) // 1 + 1 = 2
  .then((x) => {
    throw new Error("My Error");
  }) // виникає виключення (error), переходить в стан відхилено (rejected)
  .catch(() => 1) // повертає нове значення 1
  .then((x) => x + 1) // 1 + 1 = 2
  .then((x) => console.log(x)) // виведе 2
  .catch(console.error); // .catch не спрацьовує, тому що не було не вирішених помилок; не викличеться
 */

/* результат:
2 */

/* // створюємо проміс, який одразу ж вирішується (resolve) зі значенням 2
const promise = new Promise((res) => res(2));
// додаємо обробник .then() до цього проміса. Функція, передана в .then(), викликається зі значенням, яке було передано в resolve (в нашому випадку це 2)
promise
  .then((v) => {
    console.log(v); // виведе 2
    return v * 2; // повертає 4
  })
  // ще один обробник .then(). Цей обробник отримає значення, яке було повернуто у попередньому .then() (тобто 4)
  .then((v) => {
    console.log(v); // виведе 4
    return v * 2; // повертає 8
  })
  // обробник finally виконується після того, як проміс завершив своє  виконання, незалежно від результату (вирішення або відхилення). Однак значення або причина відхилення, яка була у попередньому промісі, не передається до .finally(). Існуюче значення або причина відхилення просто "проходить" через .finally()
  .finally((v) => {
    console.log(v); // виведе undefined, тому що до .finally не передається значення
    return v * 2; // тут буде помилка, тому що v === undefined
  })
  // Останній .then() отримає значення, яке було повернуто з попереднього .then() (не з .finally()), тобто 8
  .then((v) => {
    console.log(v); // виведе 8
  }); */

/* результат  :
2
4
undefined
8 */
