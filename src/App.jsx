import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenditureList from './components/ExpenditureList'
import Modal from './components/Modal'
import IconNewExpenditure from './assets/img/nuevo-gasto.svg'


function App() {

  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)

const handleNewExpenditure= () => {
setModal(true)
console.log(modal)
}

  return (

    <div className={modal ? "classHidden" : "w-full flex justify-center min-w-[320px]"}>
      <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
        <ExpenditureList />

        <div className='fixed bottom-10 right-12'>
          <img className='w-10' src={IconNewExpenditure} alt="Icono de nuevo gasto" onClick={() => handleNewExpenditure()}/>
        </div>
        </>
      )}

{modal && <Modal />}

    </div>
  )
}

export default App
