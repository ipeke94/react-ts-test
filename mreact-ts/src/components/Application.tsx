import * as React from "react";
import { FactType, fetchFacts } from "./Fact";
import {validation} from "./Validation";

// type Style = { 
//     style?: React.CSSProperties;
// } 

type SelectionProps = {
    onSubmit: (n: number) => void
}

export const Selection = ({ onSubmit }: SelectionProps) => {
    const [value, setValue] = React.useState(0);
    const [errorMessage, setErrorMessage] = React.useState('');
    
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        onSubmit(value);
        const error = validation(value);
        if (error) {
            setErrorMessage(error)
            return
      }
    }
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('');
        setValue(+e.target.value);
    }

    return (
        <form data-testid="app-form" onSubmit={(e) => submitHandler(e)}>
            <section className="fact">
                <label htmlFor="facts-number">...! If you dare, set the fact number and see the results °-° 👻 °-° !...</label>
                <input type="number"
                    onChange={(e) => handleInput(e)}
                    value={value}
                    // min="1" max="5"
                    data-testid="app-num-inp" 
                    >
                </input>
            </section>
            <input data-testid="app-fact-btn"  className="fact-btn" type="submit" value="Are you ready? 💫 "></input>
            <div data-testid="error-text" className="error-message">
             {errorMessage}
            </div>
        </form>)
}

export const Facts = ({ fact }: { fact: string }) => {
    return (
        <div className="fact-wrapper">
            <article className="fact">
                <h2 >Fact 💥</h2>
                <p data-testid="fact-text">{fact}</p>
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