import { useReducer, Dispatch } from "react";

type PizzaData = {
    numOfPeople: number;
    slicesPerPerson: number;
    slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

type PizzaAction = {
    type: "UPDATE_NUM_OF_PEOPLE" | "UPDATE_SLICES_PER_PERSON" | "UPDATE_SLICES_PER_PIE",
    payload: number
}

const initialState: PizzaState = {
    numOfPeople: 8,
    slicesPerPerson: 2,
    slicesPerPie: 8,
    pizzasNeeded: 2
}


const calculateRequiredPizza = ({
    numOfPeople,
    slicesPerPerson,
    slicesPerPie
}: PizzaData): number => {
    return Math.ceil((numOfPeople * slicesPerPerson) / slicesPerPie)
}

const addPizzaIfRequired = (data: PizzaData): PizzaState => {
    return { ...data, pizzasNeeded: calculateRequiredPizza(data) }
}

const pizzaReducer = (state: PizzaState, action: PizzaAction) => {
    if (action.type === "UPDATE_NUM_OF_PEOPLE") {
        return addPizzaIfRequired({
            ...state,
            numOfPeople: action.payload
        })
    }
    if (action.type === "UPDATE_SLICES_PER_PERSON") {
        return addPizzaIfRequired({
            ...state,
            slicesPerPerson: action.payload
        })
    }
    if (action.type === "UPDATE_SLICES_PER_PIE") {
        return addPizzaIfRequired({
            ...state,
            slicesPerPie: action.payload
        })
    }
    return state;
}

const Calculation = ({ count }: { count: any }) => {
    return (
        <section className="calculationPizza">
            <p className="caption">{count} Pizza required</p>
        </section>
    )
}

const Calculator = ({ dispatch, state }: { state: PizzaState; dispatch: Dispatch<PizzaAction> }) => {
    return (
        <form onSubmit={() => { }}>
            <label htmlFor="num-of-people">Num of People</label>
            <input
                className="num-of-people"
                type="number"
                min="1"
                value={state.numOfPeople}
                onChange={(e) => dispatch({
                    type: 'UPDATE_NUM_OF_PEOPLE',
                    payload: +e.target.value
                }
                )}
            />
            <label htmlFor="slices-per-person">Slices Per Person</label>
            <input
                className="slices-per-person"
                type="number"
                min="1"
                value={state.slicesPerPerson}
                onChange={(e) => dispatch({
                    type: 'UPDATE_SLICES_PER_PERSON',
                    payload: +e.target.value
                }
                )}
            />
            <label htmlFor="slices-per-pie">Slices Per Pie</label>
            <input
                className="slices-per-pie"
                type="number"
                min="1"
                value={state.slicesPerPie}
                onChange={(e) => dispatch({
                    type: 'UPDATE_SLICES_PER_PIE',
                    payload: +e.target.value
                }
                )}
            />
        </form>
    )
}

const CalculatorApp = () => {
    const [state, dispatch] = useReducer(pizzaReducer, initialState);
    return (
        <main className="pizzaCalculator">
            <header>
                <h1>Simple Pizza Calculator App </h1>
            </header>
            <Calculator state={state} dispatch={dispatch} />
            <Calculation count={state.pizzasNeeded} />
        </main>
    )
}

export default CalculatorApp;