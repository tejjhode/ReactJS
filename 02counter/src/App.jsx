import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(15)

  const addValue =()=>{

    counter = counter +1
    setCounter(counter)
  }
  const removeValue =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value: {counter} </h2>


    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeValue}>decrease value</button>
    </>
      
  )
}

export default App
