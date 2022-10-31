import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'



const Header = ({ setBudget, budget, isValidBudget, setIsValidBudget }) => {
  return (
    <header className='shadow-box bg-blue-400 flex flex-col p-3 items-center rounded-md text-white w-[90%] md:w-[80%]'>
        <p className='text-3xl mt-2'>Control de Gastos</p>

{isValidBudget ? (
    <ControlBudget
    budget={budget}
    />
) : (
    <NewBudget 
        setBudget={setBudget}
        budget={budget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        />

)}
        
        
    </header>
  )
}

export default Header