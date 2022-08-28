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

    return <form onSubmit={(e) => { e.preventDefault(); onSubmit(value); }}>
        <section className="fact">
            <label htmlFor="facts-number">Number of Facts °-°</label>
            <input type="number"
                onChange={(e) => setValue(+e.target.value)}
                value={value}
                min="1" max="5">
            </input>
        </section>
        <input type="submit" value="Click Here!"></input>
    </form>
}

const Facts = ({ fact }: { fact: string }) => {
    return (
        <div className="fact-wrapper">
            <article className="fact">
                <h2 >Fact</h2>
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