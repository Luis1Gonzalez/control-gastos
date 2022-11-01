import React from 'react'
import UnitExpense from './UnitExpense'


const ExpenditureList = ({ expenses }) => {

  return (
    <div className='w-[90%] md:w-[80%] '>
      <p className='text-xl mt-3 text-center'>Gastos</p>
      {expenses.map(expense => (
        <UnitExpense
      key={expense.id}
      expense={expense}
      />
      ))
      
      }
      
    </div>
  )
}

export default ExpenditureList