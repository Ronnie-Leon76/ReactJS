import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Denim Jacket",
    amount: 1500,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Calculator",
    amount: 2300,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Coffee Maker",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    //setExpenses([expense, ...expenses])
    setExpenses(prevExpenses => {
      return ([expense, ...prevExpenses])
    })
  }
  
  const chooseOption = option => {
    console.log(option)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} onOptionSelected={chooseOption}/>
    </div>
  );
}

export default App;
