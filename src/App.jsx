import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenditureList from './components/ExpenditureList'
import Modal from './components/Modal'
import IconNewExpenditure from './assets/img/nuevo-gasto.svg'
import { generateId } from './components/helpers/index'
import { object } from 'prop-types'


function App() {

  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [expenses, setExpenses] = useState([]) //[gastos, setGastos]
  const [animationModal, setAnimationModal] = useState(false)
  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimationModal(true)
      }, 500)
    }
  }, [expenseEdit])

  const handleNewExpenditure = () => {
    setModal(true)
    setExpenseEdit({})

    setTimeout(() => {
      setAnimationModal(true)
    }, 500)
  }

  const saveExpenses = (expense) => {

    if (expense.id) {
      //Actualizar
      const expensesUpdates = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(expensesUpdates)
      setExpenseEdit({})

    } else {
      //Nuevo
      expense.id = generateId()
      expense.dateNow = Date.now()
      setExpenses([...expenses, expense])
    }

    setAnimationModal(false)
    setTimeout(() => {
      setModal(false)
    }, 1000)
  }

  const deleteExpense = (id) => {
    const expenseUpdate = expenses.filter(expense => expense.id !== id)

    setExpenses(expenseUpdate)
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
            deleteExpense={deleteExpense}
            setExpenseEdit={setExpenseEdit}
          />

          <div className='fixed bottom-10 right-12'>
            <img className='w-10' src={IconNewExpenditure} alt="Icono de nuevo gasto" onClick={() => handleNewExpenditure()} />
          </div>
        </>
      )}

      {modal && <Modal
        saveExpenses={saveExpenses}
        animationModal={animationModal}
        setAnimationModal={setAnimationModal}
        setModal={setModal}
        expenseEdit={expenseEdit}
        setExpenseEdit={setExpenseEdit}
      />}

    </div>
  )
}

export default App
