import React from 'react'
import Message from './Message'
import { useState } from 'react'
import { Children } from 'react'

const NewBudget = ({ setBudget, budget }) => {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage('No es un Presupuesto Valido')
      return
    }
    setMessage('')

  }

  return (
    <div className='bg-white text-blue-400 w-full rounded-md my-3 py-5 flex justify-center'>

      <form className='w-full flex flex-col  items-center' onSubmit={handleBudget}>
        <div className=' flex flex-col w-[90%] text-xl items-center box-border'>
          <label htmlFor="budget" className='text-center'>Definir Presupuesto</label>
          <input type="text" id="budget" value={budget} placeholder='Añade tu presupuesto' className=' rounded-md bg-gray-100 my-2 w-[100%] p-1 sm:w-full text-center placeholder:text-gray-300 placeholder:text-md placeholder:italic' onChange={(e) => setBudget(Number(e.target.value))} />
        </div>
        <input type="submit" value="Añadir" className='shadow-box rounded bg-blue-800 text-white w-36 py-0.5 cursor-pointer text-center' />
        {message && <Message type="error">{message}</Message>}
      </form>


    </div>
  )
}

export default NewBudget