import * as React from "react";

type Style = {
    style?: React.CSSProperties
}

const SimpleCounterHook = ({ style = {} }: Style) => {

    const [count, setCount] = React.useState(0);

    // const changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setCount(+e.target.value);
    // }

    // const inc = (count: number) => count + 1;
    // const dec = (count:number) => count -1;
    // const reset = (count:number) => 0;

    return (
        <main className="counter-container" style={{ ...style }}>
            <h1>Simple Counter with using React Hooks</h1>
            <section className="control-buttons wrapper">
                <p className="counter-text" >{count}</p>
                <button className="increment" onClick={() => setCount(count + 1)}>+</button>
                <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
                <button className="reset" onClick={() => setCount(0)}>Reset</button>
            </section>
            <section className="control-buttons">
                <form onSubmit={() => { }}>
                    <label htmlFor="set-to">
                        Set Count
                    </label>
                    <input id="set-to" type="number" onChange={(e) => setCount(+e.target.value)} value={count} />
                    <input type="submit" />
                </form>
            </section>
        </main>

    )
}

export default SimpleCounterHook;