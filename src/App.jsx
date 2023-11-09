import { useRef, useState } from "react"

function App() {
    const [randomInput, setRandomInput] = useState('')
    const [seconds, setSeconds] = useState(0)

    const renders = useRef(0)

    const inputRef = useRef()
    
    const handleInputChange = (e) => {
        setRandomInput(e.target.value)

        renders.current++
    }


    return (
        <main className="App">
            <input type="text"
                required
                value={randomInput}
                placeholder="type anything"
            />
            <p>Renders: <code>{randomInput || '...'}</code></p>
            <br />
            <br />
            <section>
                <button>Stop</button>
                <button>Start</button>
            </section>
            <button>Reset</button>
            <br />
            <br />

            <p>Seconds: </p>

            <br />
            <br />

            <p>{randomInput}</p>
        </main>
    )
}

export default App
