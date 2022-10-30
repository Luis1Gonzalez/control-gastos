import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'

const Header = () => {
  return (
    <header className='bg-blue-400 flex flex-col p-1 items-center rounded-md text-white w-[90%] sm:w-[60%] lg:w-[40%]'>
        <h1>Control de Gastos</h1>

        <ControlPresupuesto />
    </header>
  )
}

export default Header