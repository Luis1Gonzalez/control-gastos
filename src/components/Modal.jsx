import React from 'react'
import { useState } from 'react'
import CloseBtn from '../assets/img/cerrar.svg'
import Message from './Message'

const Modal = ({ saveExpenses, animationModal, setAnimationModal, setModal }) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState ('')
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [dateId, setDateId] = useState('')
    const [message, setMessage] = useState('')
    

const handleSubmit = (e) => {
    e.preventDefault()

    if([name, quantity, category]. includes('')){
setMessage('Todos los Campos son Obligatorios')

setTimeout(() => {
    setMessage('')
},3000)
return
    }
    saveExpenses({name, quantity, category, id, dateId})
}

const hiddenModal = () => {
    setAnimationModal(false)

    setAnimationModal(false)
    setTimeout(() => {
      setModal(false)
    }, 1000);
}



    return (
        <div className='modal text-white text-2xl'>

            <div className='absolute right-6 top-6 w-6 h-6'>
                <img src={CloseBtn} alt="boton cerrar modal"  onClick={hiddenModal}/>
            </div>

            <form className='w-[95%] py-20 flex flex-col items-center' onSubmit={handleSubmit}>

                <legend className='p-2 mb-6 w-[95%] text-center text-3xl border-b-2 border-blue-700'>Nuevo Gasto</legend>

                {message && <Message type='error'>{message}</Message>}

                <div className='flex flex-row my-3'>
                    <input id="name" value={name} type="text" placeholder="Añade un Gasto" className='placeholder:text-gray-500 rounded-sm placeholder:text-center text-black text-center' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='flex my-3'>
                    <input id="quantity" value={quantity} type="text" placeholder="Añade la Cantidad" className='placeholder:text-gray-500 rounded-sm placeholder:text-center text-black text-center' onChange={(e)=> setQuantity(Number(e.target.value))}/>
                </div>

                <div className='flex my-3'>
                    <select id="category" type="text" value={category} className='text-gray-500 rounded-sm' onChange={(e) => setCategory(e.target.value)}>
                        <option value="">-- Categoría --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" className='bg-blue-700 p-2 rounded-md text-md mt-3 shadow-sm shadow-indigo-500/40' />
            </form>




        </div>
    )
}

export default Modal