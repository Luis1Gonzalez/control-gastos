import React from 'react'

const ControlPresupuesto = () => {
  return (
    <div className='bg-white text-blue-400 w-8/12 rounded-md my-3 py-5 flex justify-center'>

<form className='w-full flex  justify-center'>
    <div className=' flex flex-col w-[90%] text-lg items-center box-border'>
        <label htmlFor="" className='text-center'>Definir Presupuesto</label>
        <input type="text" className=' rounded-md bg-gray-100 my-2 w-[100%] sm:w-full'/>
        <input type="submit" value="Añadir" className='rounded bg-blue-400 text-white w-24 py-0.5 cursor-pointer'/>
    </div>
</form>


    </div>
  )
}

export default ControlPresupuesto