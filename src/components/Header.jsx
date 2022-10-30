import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'

const Header = () => {
  return (
    <header className='bg-blue-400 flex flex-col p-3 items-center rounded-md text-white w-[90%] sm:w-[60%] lg:w-[40%]'>
        <p className='text-xl mt-2'>Control de Gastos</p>

        <ControlPresupuesto />
    </header>
  )
}

export default Header