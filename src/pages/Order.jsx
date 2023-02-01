import "../assets/styles/components/points.scss"
import React from "react"
import { useState } from "react"
import data from "../assets/data/stormcast.json"


function Order () {
    let [currentValue, setCurrentValue] = useState('')
    let [isSelect, setIsSelect] = useState(false)
    return ( 
        <div className>
            <div className="pointBox">
                <h4>Combien de points?</h4>
                <input id="rangePoint" type={"range"} min={"0"} max={"3000"} step={"100"}  value={currentValue} onChange={e => setCurrentValue(e.target.value)}></input>
                <h5>{currentValue? currentValue : 1500}</h5>
            </div>
            <div className="wrapper">
                <div className="addUnit">
                    <h4>Ajouter une unité</h4>
                    <ul>
                        {data.map((unit) => {
                            return (
                                <li onClick={() => setIsSelect(true)}><p>{unit.name}</p></li>
                            );
                        })}
                    </ul>
                </div>
                <div className={`unitAdded${isSelect?"-active":"-inactive"}`}>
                    <p>Je suis ici</p>
                </div>
            </div>
        </div>
    )



}

export default Order