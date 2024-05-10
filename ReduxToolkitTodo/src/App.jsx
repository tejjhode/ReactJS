import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtod'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learing ToolKit</h1>
       <AddTodo/>
       <Todo/>
    </>
  )
}

export default App
