import React from 'react'

const Filters = ({ filtro, setFiltro }) => {

    return (
        <div className='shadow-box w-[100%]'>

            <form action="" className=''>

                <div className='flex my-3 w-[100%] h-[50px] justify-center '>
                <label htmlFor="selectCategory" className='mx-3 flex items-center text-xs sm:text-xl'>Filtrar Gastos</label>
                <select name="" id="" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    {/* <select id="selectCategory" type="text" value={filterx} className='text-gray-500 rounded-sm text-xs sm:text-xl text-center' onChange={(e) => setFilterx(e.target.value)}> */}
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