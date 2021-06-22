import React, { useState } from 'react'

import ExpensesList from '../ExpensesList'
import ExpensesFilter from '../ExpensesFilter'
import ExpensesChart from '../ExpensesChart'
import Card from '../../UI/Card'

import './styles.css'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
