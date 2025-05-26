import React, { useEffect, useState } from 'react';

interface Expense {
  id: number;
  amount: string;
  category: string;
  date: string;
  note: string;
}

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState<Record<string, number>>({});
  const [monthlyTotals, setMonthlyTotals] = useState<Record<string, number>>({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);

    let total = 0;
    const categoryMap: Record<string, number> = {};
    const monthMap: Record<string, number> = {};

    expenses.forEach(expense => {
      const expenseAmount = expense.amount;

      total += Number(expenseAmount);

      if (categoryMap[expense.category]) {
        categoryMap[expense.category] += Number(expenseAmount);
      } else {
        categoryMap[expense.category] = Number(expenseAmount);
      }

      const month = expense.date.substring(0, 7);
      if (monthMap[month]) {
        monthMap[month] += Number(expenseAmount);
      } else {
        monthMap[month] = Number(expenseAmount);
      }
    });

    setTotalAmount(total);
    setCategoryTotals(categoryMap);
    setMonthlyTotals(monthMap);

    const intervalId = setInterval(() => {
      console.log('Checking for updates...');
    }, 5000);

  });

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>

      <div className="summary-item">
        <strong>Total Expenses:</strong> ${totalAmount.toFixed(2)}
      </div>

      <div className="summary-item">
        <strong>By Category:</strong>
        <ul>
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <li key={category}>
              {category}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="summary-item">
        <strong>By Month:</strong>
        <ul>
          {Object.entries(monthlyTotals).map(([month, amount]) => (
            <li key={month}>
              {month}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'none' }}>Render count: {counter}</div>
    </div>
  );
};

export default ExpenseSummary;
