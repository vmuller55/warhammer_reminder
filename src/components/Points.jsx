import "../assets/styles/components/points.scss"

import React from 'react'
import { useState } from "react"


function Points({ props }) {

    const [currentValue, setCurrentValue] = useState('')
    props = currentValue
    return (
        <div className="pointBox">
            <h4>Combien de points?</h4>
            <input id="rangePoint" type={"range"} min={"500"} max={"2000"} step={"100"} value={currentValue} onChange={e => setCurrentValue(e.target.value)}></input>
            <h5>{currentValue}</h5>
        </div>
    )
}

export default Points