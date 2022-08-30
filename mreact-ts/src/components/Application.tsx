import * as React from "react";
import { FactType, fetchFacts } from "./Fact";

// type Style = { 
//     style?: React.CSSProperties;
// } 

type SelectionProps = {
    onSubmit: (n: number) => void
}

const Selection = ({ onSubmit }: SelectionProps) => {
    const [value, setValue] = React.useState(0);

    return (
        <form data-testid="app-form" onSubmit={(e) => { e.preventDefault(); onSubmit(value); }}>
            <section className="fact">
                <label htmlFor="facts-number">...! If you dare, set the fact number and see the results °-° 👻 °-° !...</label>
                <input type="number"
                    onChange={(e) => setValue(+e.target.value)}
                    value={value}
                    min="1" max="5"
                    data-testid="app-num-inp" 
                    >
                </input>
            </section>
            <input data-testid="app-fact-btn"  className="fact-btn" type="submit" value="Are you ready? 💫 "></input>
        </form>)
}

const Facts = ({ fact }: { fact: string }) => {
    return (
        <div className="fact-wrapper" data-testid="fact-wrapper">
            <article className="fact">
                <h2 >Fact 💥</h2>
                <p>{fact}</p>
            </article>
        </div>
    )
}


const Application = () => {
    const [facts, setFacts] = React.useState<FactType[]>([]);
    const handleSubmit = (n: number) => {
        fetchFacts(n).then(facts => setFacts(facts))
    }

    return (
        <main className="app-container">
            <Selection onSubmit={handleSubmit} />
            <section>
                {
                    facts.map(el => <Facts key={el.id} fact={el.fact} />)
                }
            </section>
        </main>
    )

}





export default Application;