import React from 'react'
import CloseBtn from '../assets/img/cerrar.svg'

const Modal = () => {
    return (
        <div className='modal text-white text-xl'>

            <div className='absolute right-6 top-6 w-6 h-6'>
                <img src={CloseBtn} alt="boton cerrar modal" />
            </div>

            <form className='w-[95%] py-10 flex flex-col items-center'>
                <legend className='p-2 mb-3 w-[80%] text-center text-2xl border-b-2 border-blue-700'>Nuevo Gasto</legend>

                <div className='flex flex-row my-2'>
                    <input id="name" type="text" placeholder="Añade un Gasto" className='placeholder:text-gray-500 rounded-sm placeholder:text-center'  />
                </div>

                <div className='flex my-2'>
                    <input id="quantity" type="text" placeholder="Añade la Cantidad" className='placeholder:text-gray-500 rounded-sm placeholder:text-center' />
                </div>

                <div className='flex my-2'>
                    <select id="category" type="text" className='text-gray-500 rounded-sm'>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" className='bg-blue-700 p-2 rounded-md text-sm mt-3 shadow-sm shadow-indigo-500/40' />
            </form>




        </div>
    )
}

export default Modal