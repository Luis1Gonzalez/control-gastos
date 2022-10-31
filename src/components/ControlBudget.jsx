import React from 'react'

const ControlBudget = ({ budget }) => {

    const formatCurrency = (quantity) => {
        return quantity.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
        });
    };

    return (
        <div className='bg-white text-blue-500 w-[90%] font-bold rounded-md my-4 px-2'>
            <div>Grafica</div>
            <div className='my-3'>
                <p>Presupuesto:<span className='text-gray-500 font-normal'>{` ${formatCurrency(budget)}`}</span></p>
                <p>Disponible:<span className='text-gray-500 font-normal'>{` 300 €`}</span></p>
                <p>Gastado:<span className='text-gray-500 font-normal'>{` 200 €`}</span></p>
            </div>
        </div>
    )
}

export default ControlBudget