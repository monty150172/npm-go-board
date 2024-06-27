import { useState } from 'react'
import './App.css'
import Go from './components/Go'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Go Spielbrett</h1>
      <div className="card">
        <Go />
        <button onClick={() => setCount((count) => count + 1)}>
          Züge: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Klicken Sie auf das Brett, um zu spielen
      </p>
    </>
  )
}

export default App