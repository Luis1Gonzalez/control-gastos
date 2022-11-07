import React from 'react'
import IconoAhorro from './../assets/img/icono_ahorro.svg'
import IconoCasa from './../assets/img/icono_casa.svg'
import IconoComida from './../assets/img/icono_comida.svg'
import IconoGastos from './../assets/img/icono_gastos.svg'
import IconoOcio from './../assets/img/icono_ocio.svg'
import IconoSalud from './../assets/img/icono_salud.svg'
import IconoSuscripciones from './../assets/img/icono_suscripciones.svg'
import { formatDate } from './helpers'
import { formatCurrency } from './helpers'
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBack2Line } from 'react-icons/ri';


const categoryDictionary = {
    ahorro: IconoAhorro,
    alimentacion: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}



const UnitExpense = ({ expense, deleteExpense, setExpenseEdit }) => {

    const { name, quantity, category, dateNow, id } = expense

    return (


                <div className='flex flex-col py-3 px-1 md:p-3 w-full sm:flex-row shadow-box text-gray-700 my-3'>

                    <div className='cursor-pointer h-auto flex py-1 items-center sm:w-3/5 md:mx-3' onClick={() => setExpenseEdit(expense)}>
                        <img className='h-[65px] mx-1 md:mx-3' src={categoryDictionary[category]} alt="iconos de los gastos" />
                        <div className=''>
                            <p className='uppercase text-sm sm:text-2xl font-bold'>{category}</p>
                            <p className='capitalize text-xs  sm:text-xl font-bold'>{name}</p>
                            <p className='text-xs sm:text-xl font-bold'>Agregado el:{''} <span className='font-normal capitalize text-xs sm:text-lg md:text-sm lg:text-lg'>{formatDate(dateNow)}</span></p>
                        </div>
                    </div>
                    <div className='flex mt-2 px-2 items-center'>
                    <button onClick={() => deleteExpense(id)} className=' shadow-box bg-red-600 sm:w-[40px] sm:h-[40px] text-white rounded-full md:mx-3 flex justify-center h-[30px] w-[30px] items-center sm:px-3'>{<RiDeleteBack2Line />}</button>
                    <p className='flex w-5/6 justify-end items-center px-5 sm:mx-8 font-bold md:w-2/4 text-md sm:text-xl lg:text-3xl sm:w-1/4 sm:-order-1'>{formatCurrency(quantity)}</p>
                    </div>
                </div>


    )
}

export default UnitExpense