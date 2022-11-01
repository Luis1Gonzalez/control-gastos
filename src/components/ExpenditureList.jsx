import React from 'react'
import UnitExpense from './UnitExpense'


const ExpenditureList = ({ expenses }) => {
  return (
    <div>
      <UnitExpense
      key={expenses.id}
      expenses={expenses}
      />
    </div>
  )
}

export default ExpenditureList