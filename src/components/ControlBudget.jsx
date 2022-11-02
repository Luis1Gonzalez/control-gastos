import React, { useEffect, useState } from 'react'
import { formatCurrency } from './helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import Message from './Message'
import { Children } from 'react'

const ControlBudget = ({ budget, expenses }) => {

    const [spent, setSpent] = useState(0);
    const [available, setAvailable] = useState(0);
    const [percentage, setPercentage] = useState(0)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0)

        const totalAvailable = budget - totalSpent

        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(1)

        setSpent(totalSpent)
        setAvailable(totalAvailable)

        setTimeout(() => {
            setPercentage(newPercentage)
        },1500)

        if(percentage > 200 ){
            setMessage('Posible Error Entre el Presupuesto y sus Gastos')
            setAvailable(0)
        }
    }, [expenses])

    return (
        <div className='bg-white text-blue-500 w-[90%] min-h-[220px] md:w-[75%] font-bold rounded-md my-4 px-2 flex flex-col items-center md:flex-row'>
            <div className='w-[70%] md:w-2/4 flex justify-center pt-3 h-[160px]'>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#dc2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        extColor: percentage < 100 ? '#dc2626' : '#3b82f6'
                    })}
                    value={percentage}
                    text={percentage > 200 ? '!Error' : `${percentage}%`}
                />
            </div>
            <div className='my-1 md:w-2/4 flex flex-col justify-around h-full pt-6'>
                <p>Presupuesto:<span className='text-gray-500 font-normal'>{` ${formatCurrency(budget)}`}</span></p>
                <p>Disponible:<span className='text-gray-500 font-normal'>{` ${formatCurrency(available)}`}</span></p>
                <p>Gastado:<span className='text-gray-500 font-normal'>{` ${formatCurrency(spent)}`}</span></p>
                {message && <Message type="error">{message}</Message>}
            </div>
            
        </div>
    )
}

export default ControlBudget