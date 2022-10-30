import React from 'react'
import NewBudget from './NewBudget'


const Header = ({ setBudget, budget }) => {
  return (
    <header className='bg-blue-400 flex flex-col p-3 items-center rounded-md sombra text-white w-[90%] sm:w-[60%] lg:w-[40%]'>
        <p className='text-3xl mt-2'>Control de Gastos</p>

        <NewBudget 
        setBudget={setBudget}
        budget={budget}
        />
    </header>
  )
}

export default Header