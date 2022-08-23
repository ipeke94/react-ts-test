import React from 'react';
import { CharType,  } from "./Character"; 

const CharInfo = ({char}: {char: CharType}) => {
  return (
    <article>
        <header>
            <h1 className="charName">{ char.name}</h1>
            <h2 className="charFeature">{"Alignment: " + char.alignment}</h2>
            <h2 className="charFeature">{"Intelligence: " + char.intelligence}</h2>
            <h2 className="charFeature">{"Strength: " + char.strength}</h2>
            <h2 className="charFeature">{"Speed: " + char.speed}</h2>
            <h2 className="charFeature">{"Durability: " + char.durability}</h2>
            <h2 className="charFeature">{"Power: " + char.power}</h2>
            <h2 className="charFeature">{"Combat: " + char.combat}</h2>
            <h2 className="charFeature">{"Total: " + char.total}</h2>
        </header>
        <table>
        </table>
    </article>
  )
}

export default CharInfo;