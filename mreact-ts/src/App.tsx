import './styles/style.scss';
import Main from "./components/Main";
import { Link } from 'react-router-dom';

const App = () => {
    const componentList = ["Home", "SimpleReducer", "CalculatorApp", "Application", "SimpleCounterHook", "SimpleCounter", "Children", "Question", "CharInfo"];
    const listItems = componentList.map((elem, index) =>
        <li key={index}><Link to={`/${elem && elem.toLowerCase()}`}>{elem}</Link></li>
    );

    return (
        <div className="app">
            <ul>{listItems}</ul>
            <Main />
        </div>)
}

export default App;
