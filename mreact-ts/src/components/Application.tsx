import * as React from "react";
import { FactType ,fetchFacts } from "./Fact";

// type Style = { 
//     style?: React.CSSProperties;
// } 

type SelectionProps = {
  onSubmit: (n: number) => void
}

const Selection = ({onSubmit}: SelectionProps) => {
    const [value, setValue] = React.useState(0);
    
    return <form onSubmit={(e) => {e.preventDefault(); onSubmit(value);}}>
        <section className="fact">
            <label style={{margin: "10px", textAlign: "left"}} htmlFor="facts-number">num of facts</label>
            <input type="number" 
                style={{width: "100px"}}
                onChange={(e) => setValue(+e.target.value)} 
                value={value} 
                min="1" max="5">
            </input>
        </section>
        <input type="submit" value="fetch"></input>
    </form>
}

const Facts = ({fact}: {fact: string})  => {
    return (
        <div style={{padding:"10px", color:"black", backgroundColor:"white"}}>
            <article className="fact">
                <h2 style={{margin: "16px"}}>Fact</h2>
                <p>{fact}</p>
            </article>
        </div>
  )
} 


const Application = () => {
    const [facts, setFacts] = React.useState<FactType[]>([]);
    const handleSubmit = (n:number) => {
      fetchFacts(n).then(facts => setFacts(facts))
    }
        
    return(
        <main style={{color:"black", backgroundColor:"white", width:400, height: 400}}>
            <Selection onSubmit={handleSubmit}/>
            <section>
            {
                facts.map(el => <Facts key={el.id} fact={el.fact}/>)
            }
            </section>
        </main>
    )

}





export default Application;