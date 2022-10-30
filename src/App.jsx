import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  const [budget, setBudget] = useState(0)
  console.log(budget)
  return (
    <div className="w-full flex justify-center min-w-[320px]">
      <Header 
      setBudget={setBudget}
      budget={budget}
      />
    </div>
  )
}

export default App
