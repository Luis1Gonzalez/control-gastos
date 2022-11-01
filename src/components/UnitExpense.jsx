import React from 'react'
import IconoAhorro from './../assets/img/icono_ahorro.svg'
import IconoCasa from './../assets/img/icono_casa.svg'
import IconoComida from './../assets/img/icono_comida.svg'
import IconoGastos from './../assets/img/icono_gastos.svg'
import IconoOcio from './../assets/img/icono_ocio.svg'
import IconoSalud from './../assets/img/icono_salud.svg'
import IconoSuscripciones from './../assets/img/icono_suscripciones.svg'
import { formatDate } from './helpers'

const categoryDictionary =  {
    ahorro: IconoAhorro,
    alimentacion: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}

const UnitExpense = ({ expense }) => {

const {name, quantity, category, dateNow, id} = expense//error para mañana

const formatCurrency = (quantity) => {
    return quantity.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
};


  return (
    <div className='flex flex-col p-3 w-full sm:flex-row shadow-box text-gray-700 my-3'>

        <div className='h-auto  flex py-2 items-center sm:w-3/4'>
            <img className='h-[80px] mx-2' src={categoryDictionary[category]} alt="iconos de los gastos" />
            <div>

                <p className='uppercase text-sm sm:text-2xl font-bold'>{category}</p>
                <p className='capitalize text-xs  sm:text-xl font-bold'>{name}</p>
                <p className='text-xs sm:text-xl font-bold'>Agregado el:{''} <span className='font-normal capitalize text-xs sm:text-lg'>{formatDate(dateNow)}</span></p>
            </div>
        </div>
        <p className='flex justify-end items-center px-5 sm:mx-8 font-bold text-md sm:text-3xl'>{formatCurrency(quantity)}</p>
    </div>
  )
}

export default UnitExpense