import * as React from "react";
import { CharType, fetchChar } from "./Character";
import Loading from "./Loading";

const CharInfo = () => {
  const [char, setCharacter] = React.useState<CharType | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      fetchChar().then(
        (char) => {
          setCharacter(char)
        });
      setLoading(false);
    }, 1500)
  }, []);

  return (
    <div className="hero">
      {
        loading ? (<Loading />) : (char ? (
          <header>
            <h1 className="charName">{`°-° ${char.name} 🦸‍♀️🦸🏻 °-°`}</h1>
            <h2 className="charFeature">{"Alignment: " + char.alignment}</h2>
            <h2 className="charFeature">{"Intelligence: " + char.intelligence}</h2>
            <h2 className="charFeature">{"Strength: " + char.strength}</h2>
            <h2 className="charFeature">{"Speed: " + char.speed}</h2>
            <h2 className="charFeature">{"Durability: " + char.durability}</h2>
            <h2 className="charFeature">{"Power: " + char.power}</h2>
            <h2 className="charFeature">{"Combat: " + char.combat}</h2>
            <h2 className="charFeature">{"Total: " + char.total}</h2>
          </header>) : <div>No Data Loaded</div>)
      }
    </div>
  )
}

export default CharInfo;