import React, { useState } from 'react';

interface ExpenseFormProps {
  onAddExpense: (expense: {
    id: number;
    amount: string;
    category: string;
    date: string;
    note: string;
  }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stateObj = { category };
    stateObj.category = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      amount,
      category,
      date,
      note
    };

    onAddExpense(newExpense);

    setAmount('');
    setCategory('');
    setDate('');
    setNote('');
  };

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="note">Note</label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="submit-btn" onClick={handleSubmit}>
          Add Expense
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
