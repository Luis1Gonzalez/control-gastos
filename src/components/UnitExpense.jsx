import React from 'react'
import IconoAhorro from './../assets/img/icono_ahorro.svg'
import IconoCasa from './../assets/img/icono_casa.svg'
import IconoComida from './../assets/img/icono_comida.svg'
import IconoGastos from './../assets/img/icono_gastos.svg'
import IconoOcio from './../assets/img/icono_ocio.svg'
import IconoSalud from './../assets/img/icono_salud.svg'
import IconoSuscripciones from './../assets/img/icono_suscripciones.svg'
import { formatDate } from './helpers/index'

const UnitExpense = ({ expenses }) => {

const categoryDictionary =  {
    ahorro: IconoAhorro,
    alimentacion: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}

const {name, quantity, category, dateId, id} = expenses//error para mañana
console.log(expenses)
  return (
    <div>
        <div>
            <img src={categoryDictionary[category]} alt="iconos de los gastos" />
            <div>
                <p>{category}</p>
                <p>{name}</p>
                <p>Agregado el:{''} <span>{formatDate(id)}</span></p>
            </div>
        </div>
        <p>{quantity}</p>
    </div>
  )
}

export default UnitExpense