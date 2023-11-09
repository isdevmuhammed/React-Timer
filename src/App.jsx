import { useRef, useState } from "react"

function App() {
    const [randomInput, setRandomInput] = useState('')
    const [seconds, setSeconds] = useState(0)

    const renders = useRef(0)

    const inputRef = useRef()

    const timerId = useRef()

    const startTimer = () => {
        
    }
    
    const handleInputChange = (e) => {
        setRandomInput(e.target.value)

        renders.current++
    }

    // const focusOnInput = () => {
    //     inputRef.current.focus()
    // }

    return (
        <main className="App">
            <input type="text"
            ref={inputRef}
                required
                value={randomInput}
                placeholder="type anything"
                onChange={handleInputChange}
            />
            <p>Renders: <code>{renders.current || '...'}</code></p>
            <br />
            <br />
            <section>
                {/* <button onClick={focusOnInput}>Focus</button> */}
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
