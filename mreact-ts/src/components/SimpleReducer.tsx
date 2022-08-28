import * as  React from 'react';

type simpleState = {
    count: number
}

// type simpleAction = {
//     type: "INCREMENT" | "DECREMENT" | "RESET" | "SET",
//     payload?: number
// }
type simpleAction = {
    type: "INCREMENT" | "DECREMENT" | "RESET"
}

type setAction = {
    type: "SET";
    payload: number;
}

const initialState: simpleState = {
    count: 0
}

type simpleCounterAction = simpleAction | setAction;

const reducer = (state: simpleState, action: simpleCounterAction) => {
    if (action.type === "INCREMENT") {
        return { count: state.count + 1 }
    }
    if (action.type === "DECREMENT") {
        return { count: state.count - 1 }
    }
    if (action.type === "RESET") {
        return { count: 0 }
    }
    if (action.type === "SET") {
        return { count: action.payload || 0 }
    }
    return state;
}


const SimpleReducer = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });
    const set = (value: number) => dispatch({ type: 'SET', payload: value });

    return (
        <main className="counter-container">
            <h1>Simple Counter with using Reducer</h1>
            <section className="control-buttons wrapper">
                <p className="counter-text">{state.count}</p>
                <button className="increment" onClick={increment}>+</button>
                <button className="decrement" onClick={decrement}>-</button>
                <button className="reset" onClick={reset}>Reset</button>
            </section>
            <section className="control-buttons">
                <form onSubmit={() => { }}>
                    <label htmlFor="set-to" className="">
                        Set Count
                    </label>
                    <input id="set-to" type="number" onChange={(e) => set(+e.target.value)} value={state.count} />
                    <input type="submit" />
                </form>
            </section>
        </main>
    )
}

export default SimpleReducer;