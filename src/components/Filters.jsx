import React from 'react'

const Filters = ({ filter, setFilter }) => {
    return (
        <div className='shadow-box w-[100%]'>

            <form action="" className=''>

                <div className='flex my-3 w-[100%] h-[50px] justify-center '>
                <label htmlFor="selectCategory" className='mx-3 flex items-center text-xl'>Filtrar Gastos</label>
                    <select id="selectCategory" type="text" value={filter} className='text-gray-500 rounded-sm' onChange={(e) => setFilter(e.target.value)}>
                        <option value="">-- Todas las Categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default Filters