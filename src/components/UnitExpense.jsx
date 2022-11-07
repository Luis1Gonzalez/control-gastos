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
import { TiDeleteOutline } from 'react-icons/ti';


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


                <div className='flex flex-col py-3 px-1 sm:p-3 w-full sm:flex-row shadow-box text-gray-700 my-3'>

                    <div className='cursor-pointer h-auto flex py-1 items-center sm:w-3/4 md:mx-3' onClick={() => setExpenseEdit(expense)}>
                        <img className='h-[65px] mx-2 md:mx-3' src={categoryDictionary[category]} alt="iconos de los gastos" />
                        <div className=''>
                            <p className='uppercase text-sm sm:text-2xl font-bold'>{category}</p>
                            <p className='capitalize text-xs  sm:text-xl font-bold'>{name}</p>
                            <p className='text-xs sm:text-xl font-bold'>Agregado el:{''} <span className='font-normal capitalize text-xs sm:text-lg md:text-sm lg:text-lg'>{formatDate(dateNow)}</span></p>
                        </div>
                    </div>
                    <div className='flex mt-2 pl-5 items-center sm:w-1/4'>
                    <button onClick={() => deleteExpense(id)} className='sm:w-[px] sm:h-1/4 md:mx-1 flex justify-center h-[30px] w-[30px] text-2xl text-red-600 items-center'>{<TiDeleteOutline />}</button>
                    <p className='flex w-5/6 justify-end items-center px-2 font-bold sm:w-auto text-md sm:text-xl lg:text-3xl -order-1'>{formatCurrency(quantity)}</p>
                    </div>
                </div>


    )
}

export default UnitExpense