import React, { useEffect, useState } from 'react'
import { formatCurrency } from './helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlBudget = ({ budget, expenses }) => {

    const [spent, setSpent] = useState(0);
    const [available, setAvailable] = useState(0);
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0)

        const totalAvailable = budget - totalSpent

        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(1)

        console.log(totalSpent)
        console.log(totalAvailable)

        setSpent(totalSpent)
        setAvailable(totalAvailable)

        setTimeout(() => {
            setPercentage(newPercentage)
        },1500)
    }, [expenses])

    return (
        <div className='bg-white text-blue-500 w-[90%] font-bold rounded-md my-4 px-2 flex flex-col items-center'>
            <div className='w-[70%] flex justify-center pt-3'>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#dc2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: percentage > 100 ? '#dc2626' : '#3b82f6'
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                />
            </div>
            <div className='my-3'>
                <p>Presupuesto:<span className='text-gray-500 font-normal'>{` ${formatCurrency(budget)}`}</span></p>
                <p>Disponible:<span className='text-gray-500 font-normal'>{available > 0 ? formatCurrency(available) : '0 €'}</span></p>
                <p>Gastado:<span className='text-gray-500 font-normal'>{` ${formatCurrency(spent)}`}</span></p>
            </div>
        </div>
    )
}

export default ControlBudget