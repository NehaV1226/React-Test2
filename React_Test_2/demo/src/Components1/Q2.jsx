import React, { useState } from 'react'

const Q2 = () => {
    const [count, setCount] = useState(0)
    const [a, setA] = useState(10)


    return (
        <center><div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}> Increment </button>

            <h2>{a}</h2>
            <button onClick={() => setA(a - 1)}> Decrement </button>


        </div></center>
    )
}

export default Q2