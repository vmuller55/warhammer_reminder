import "../assets/styles/pages/createArmyList.scss"
import Death from "../assets/images/death.svg"
import Order from "../assets/images/order.svg"
import Chaos from "../assets/images/chaos.svg"
import Destruction from "../assets/images/destruction.svg"

import { Link } from "react-router-dom";

function CreateArmyList() {

    const faction = [
        {name : "ordre", src : Order},
        {name : "chaos", src : Chaos},
        {name : "destruction", src : Destruction},
        {name : "death", src : Death}
    ]

    return (
        <div className="createArmyList">
            <h2>Créer sa liste</h2>
            <h3>Séléctionner son armée</h3>
            <ul>
                {faction.map((type) => {
                    return (
                        <Link to={`/${type.name}`}>
                            <li className="armyListCards"><img src={type.src} alt={type.name}/>{type.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    )
    }

export default CreateArmyList