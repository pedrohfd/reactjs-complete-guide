import React from 'react'

import ExpenseForm from '../ExpenseForm'

import './styles.css'

const NewExpense = props => {
  const handleSaveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  )
}

export default NewExpense
