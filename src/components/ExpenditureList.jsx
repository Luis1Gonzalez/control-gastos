import React from 'react'
import UnitExpense from './UnitExpense'


const ExpenditureList = ({ expenses, deleteExpense, setExpenseEdit, filtro, gastosFiltrados }) => {

  return (
    <div className='w-[90%] md:w-[80%] '>

      {
        filtro ? (
          <>
            <p className='text-xl mt-3 text-center'>{expenses.length ? 'Gastos' : 'No Hay Gastos'}</p>

            {gastosFiltrados.map(expense => (


              <UnitExpense
                key={expense.id}
                expense={expense}
                deleteExpense={deleteExpense}
                setExpenseEdit={setExpenseEdit}
              />
            ))}
          </>

        ) : (
          <>
            <p className='text-xl mt-3 text-center'>{expenses.length ? 'Gastos' : 'No Hay Gastos'}</p>

            {expenses.map(expense => (

              <UnitExpense
                key={expense.id}
                expense={expense}
                deleteExpense={deleteExpense}
                setExpenseEdit={setExpenseEdit}
              />
            ))}
          </>
        )
      }





    </div>
  )
}

export default ExpenditureList