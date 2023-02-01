import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import "../assets/styles/pages/home.scss"


function Home() {
  return (
    <div className="intro">
      <h1>Warhammer Reminder</h1>
      <h2>A quoi je sers?</h2>
      <p>Warhammer Reminder est une application web qui va vous permettre de créer vos listes d'armées. Une fonction vous permettra d'avoir un mémo des actions possibles à faire pour chaque phase.
         Il est également possible de se créer un compte pour enregistrer ses listes ! Plusieurs features sont en cours et s'ajouteront par la suite !</p>
      <Link to={`/create-list`}>
        <Button> Créer ma liste</Button>
      </Link>
    </div>
  );
}

export default Home;
