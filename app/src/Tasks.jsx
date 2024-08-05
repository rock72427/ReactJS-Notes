import React, { useState } from 'react'

function Tasks() {
    const [color, setColor] = useState("")
    const [color1, setColor1] = useState("")
    const [count, setCount] = useState(0)
    const changeCount = (event) => {
        let id = event.target.id
        let newValue
        if (id == "inc") {
            newValue = count + 1
        } else {
            newValue = count - 1
        }
        if (newValue === 0) {
            setColor1("white")
        }
        else if (newValue == 6) {
            setColor1("yellow")
        }
        else if (newValue > 6 && newValue <= 10) {
            setColor1("brown")
        }
        else if (newValue <= 5 && newValue > 0) {
            setColor1("blue")
        }
        else {
            setColor1("black")
        }
        setCount(newValue)
    }
    return (
        <div>
            <div className="box" style={{
                height: "200px", backgroundColor: color,
                width: "400px", margin: "50px auto",
                textAlign: "center", alignContent: "center", border: "1px solid black"
            }}>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
            </div>

            <div className="box2" style={{
                height: "200px", backgroundColor: color1,
                width: "400px", margin: "50px auto",
                textAlign: "center", alignContent: "center", border: "1px solid black"
            }} >
                <button onClick={changeCount} id="inc">+</button>
                <b>{count}</b>
                <button onClick={changeCount} id="dec">-</button>
            </div>
        </div>
    )
}


export default Tasks