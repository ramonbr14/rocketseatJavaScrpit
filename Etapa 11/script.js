/*
const dummyTransactions = [
    {
        id: 1,
        name: 'Bolo de Brigadeiro',
        amount: -20
    },
    {
        id: 2,
        name: 'Salário',
        amount: 300
    },
    {
        id: 3,
        name: 'Torta de frango',
        amount: -10
    },
    {
        id: 4,
        name: 'Violão',
        amount: 150
    }
]

console.log(dummyTransactions);


const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithhoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li');

    li.classList.add(cssClass);
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithhoutOperator}</span><button class="delete-btn">x</button>
    `

    transactionUl.prepend(li);
}

const init = () => {
    dummyTransactions.forEach((addTransactionIntoDOM))
}
//Tenho essa array de cima.

<form action="">
      <input type="text" 
      pattern="">
      <button type="submit">VERIFICAR URL</button>
     
  </form>