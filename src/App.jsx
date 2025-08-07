import { useState } from 'react'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
        Learn React 19
        <Products />
        <Products />
        <Products />
        <Products />
        </h1>
      </div>
    </>
  )
}

export default App
