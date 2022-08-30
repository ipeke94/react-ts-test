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
            <h1 className="component-list-name">^_^ Component List 🤖 ^_^</h1>
            <ul>{listItems}</ul>
            <h2 className="show-text">Let the show begin..! 🎉</h2>
            <Main />
        </div>)
}

export default App;
