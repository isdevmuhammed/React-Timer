import { useEffect, useState } from "react"

function App() {

  const [userInput, setUserInput] = useState("")
  const [randomInput, setRandomInput] = useState('')


  return (
    <main className="App">
        <label>Fibonacci Sequence:</label>
        <input type="text"
          placeholder="position"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          required
        />
        <p>Number: <code>{fibNumber || 'You may endup stuck 🙂'}</code></p>
        <br />
        <br />
        <label>Random Input:</label>
     <input type="text" 
     required
     value={randomInput}
     placeholder="type anything"
     onChange={e=>setRandomInput(e.target.value)}
     />
     <p>Result: <code>{randomInput || '...'}</code></p>
    </main>
  )
}

export default App
