import "../assets/styles/components/points.scss"

import React from 'react'
import RangeSlider from "./Slider"

function Points() {
    return (
        <div className="pointBox">
            <h4>Combien de points?</h4>
            <RangeSlider/>
        </div>
    )
}

export default Points