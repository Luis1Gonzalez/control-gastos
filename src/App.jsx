import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenditureList from './components/ExpenditureList'
import Modal from './components/Modal'
import IconNewExpenditure from './assets/img/nuevo-gasto.svg'
import { generateId } from './components/helpers/index'


function App() {

  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [expenses, setExpenses] = useState([]) //[gastos, setGastos]
  const [animationModal, setAnimationModal] = useState(false)

const handleNewExpenditure= () => {
setModal(true)
}

const saveExpenses = (expense) => {
  expense.id = generateId()
  expense.dateNow = Date.now()
  setExpenses([...expenses, expense])

  setAnimationModal(false)
  setTimeout(() => {
    setModal(false)
  },1000)
}

  return (

    <div className={modal ? "classHidden" : "w-full flex flex-col items-center min-w-[320px] max-w-[924px]"}>
      <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      expenses={expenses}
      />

      {isValidBudget && (
        <>
        <ExpenditureList 
        expenses={expenses}
        />

        <div className='fixed bottom-10 right-12'>
          <img className='w-10' src={IconNewExpenditure} alt="Icono de nuevo gasto" onClick={() => handleNewExpenditure()}/>
        </div>
        </>
      )}

{modal && <Modal
saveExpenses={saveExpenses}
animationModal={animationModal}
setAnimationModal={setAnimationModal}
setModal={setModal}
/>}

    </div>
  )
}

export default App
