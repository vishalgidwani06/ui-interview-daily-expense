import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

interface Expense {
  id: number;
  amount: string;
  category: string;
  date: string;
  note: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Daily Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseList expenses={expenses} />

      <ExpenseSummary expenses={expenses} />
    </div>
  );
}

export default App;
