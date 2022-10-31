import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenditureList from './components/ExpenditureList'
import IconNewExpenditure from './assets/img/nuevo-gasto.svg'


function App() {

  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)



  return (
    <div className="w-full flex justify-center min-w-[320px]">
      <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
        <ExpenditureList />

        <div className='fixed bottom-20 right-20'>
          <img className='w-10' src={IconNewExpenditure} alt="Icono de nuevo gasto" />
        </div>
        </>
      )}


    </div>
  )
}

export default App
