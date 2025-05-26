# Daily Expense Tracker - Application Overview

## Introduction

The Daily Expense Tracker is a web application designed to help users track and manage their daily expenses.

## Application Architecture

The application is built using React with TypeScript and follows a component-based architecture. It uses Vite as the build tool and Tailwind CSS for styling.

### Component Structure

The application consists of the following main components:

1. **App Component** (`App.tsx`): The root component that manages the overall state of the application and renders the main UI components.

2. **ExpenseForm Component** (`ExpenseForm.tsx`): Handles the input form for adding new expenses. It captures:
   - Amount
   - Category
   - Date
   - Note (optional)

3. **ExpenseList Component** (`ExpenseList.tsx`): Displays all expenses in a tabular format with columns for date, category, amount, note, and actions. It also shows a "Recent Expense Card" highlighting the most recent expense.

4. **ExpenseSummary Component** (`ExpenseSummary.tsx`): Provides analytical information about expenses, including:
   - Total expenses
   - Expenses by category
   - Expenses by month