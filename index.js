const LIMIT = 10000;

const expenses = [];

const inputNode = document.querySelector(".js-expense-input");
const buttonNode = document.querySelector(".js-button");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit')
const statusNode = document.querySelector('.js-status')

limitNode.innerText = LIMIT;

buttonNode.addEventListener("click", function () {
  if (inputNode.value === '') {
    return;
  }
  const expense = parseInt(inputNode.value);

  inputNode.value = '';
  //сохраняем трату в список
  expenses.push(expense);

  //выводим список трат
  let expensesListHTML = '';

  expenses.forEach((element) => { 
    expensesListHTML += `<li>${element} руб.</li>`;
  });

  historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

  //посчитать и вывести сумму
  let sum = 0;

  expenses.forEach(element => {
    sum += element;
  });

  sumNode.innerText = sum;
  //cравнение с лимитом и вывод статуса 
   if (sum <= LIMIT) {
    statusNode.innerText = 'всё хорошо';
   } else {
    statusNode.innerText ='всё плохо';
    statusNode.classList.add('status_red')
   }

});
