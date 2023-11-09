import { useEffect, useState } from "react"

function App() {
    const [randomInput, setRandomInput] = useState('')


    return (
        <main className="App">
            <input type="text"
                required
                value={randomInput}
                placeholder="type anything"
                onChange={e => setRandomInput(e.target.value)}
            />
            <p>Renders: <code>{randomInput || '...'}</code></p>
        </main>
    )
}

export default App
