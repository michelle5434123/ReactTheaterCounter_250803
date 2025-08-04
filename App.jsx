import { useState } from 'react'
export default function App() {
    const [count, setCount] = useState(0)

    function add(){
        setCount(count + 1)
    }
    function subtract(){
        setCount(count - 1)
    }

    return (
        <main className="container">
            <h2>People entered:</h2>
            <div className="counter">
                <button className="Decrease-btn" onClick={subtract} aria-label="Decrease count">-</button>
                <h3 className="count">{count}</h3>
                <button className="increase-btn" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
  )
}
