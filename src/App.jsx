import { useState } from 'react'
import Increase from './components/increment'
import { useIncrece } from './hooks/useIncrece';
import './App.css'

function App() {
 const {count,increce,decrece}=useIncrece() // utilizamos los datos de increce

  return (
    <>
      <main>
        {/* Usando el componente increase */}
      <Increase
      count={count}
      increce={increce}
      decrece={decrece}/>
      </main>
      
      
    </>
  )
}

export default App
