
import "../assets/styles/layout/selectArmy.scss"

import { Link } from "react-router-dom";

function OrderAllegeance() {

    const army = [
        {name : "Stormcast"},
        {name : "Cité de sigmar"},
        {name : "Lumineths"},
        {name : "Sylvaneths"},
        {name : "Séraphons"},
        {name : "Kharadrons"},
        {name : "Daughters of Khaine"},
        {name : "Fireslayer"},
        {name : "Idoneths"}
    ]

    return (
        <div className="selectArmy">
            <h2>Créer sa liste</h2>
            <h3>Séléctionner son armée</h3>
            <ul>
                {army.map((type) => {
                    return (
                        <Link to={`/${type.name}`}>
                            <li className="armyListCards"><p>{type.name}</p></li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    )
    }

export default OrderAllegeance