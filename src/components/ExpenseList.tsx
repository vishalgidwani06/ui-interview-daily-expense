import React from 'react';

interface Expense {
  id: number;
  amount: string;
  category: string;
  date: string;
  note: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr className="expense-row">
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td className="expense-note">{expense.note}</td>
                <td>
                  <div className="action-icons">
                    <span role="button" aria-label="Edit">✏️</span>
                    <span role="button" aria-label="Delete">🗑️</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="expense-card">
        <p>Recent Expense Card</p>
        {expenses.length > 0 && (
          <div>
            <p>Latest: {expenses[expenses.length - 1].category}</p>
            <p>Amount: ${expenses[expenses.length - 1].amount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
