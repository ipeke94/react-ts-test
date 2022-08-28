import * as React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom';

import CharInfo from "./CharInfo";
import SimpleReducer from "./SimpleReducer";
import Home from "./Home";
import CalculatorApp from "./CalculatorApp";
import Application from "./Application";
import SimpleCounterHook from "./SimpleCounterHook";
import SimpleCounter from "./SimpleCounter";
import Children from "./Children";
import Question from "./Question";


type additionalProps = {
    style?: React.CSSProperties
    incident?: string
}

interface IRoute {
    path: string,
    Component: React.ElementType<{ additionalProps: additionalProps }> | React.ElementType;
}

const Main = () => {
    const routes: IRoute[] = [
        {
            path: "/home",
            Component: Home
        },
        {
            path: "/simplereducer",
            Component: SimpleReducer
        },
        {
            path: "/calculatorapp",
            Component: CalculatorApp
        },
        {
            path: "/application",
            Component: Application
        },
        {
            path: "/simplecounterhook",
            Component: SimpleCounterHook
        },
        {
            path: "/simplecounter",
            Component: SimpleCounter
        },
        {
            path: "/children",
            Component: Children
        },
        {
            path: "/question",
            Component: Question
        },
        {
            path: "/charinfo",
            Component: CharInfo
        }
    ];

    const routeComponents = routes.map(({ path, Component }, index: number) => {
        return <Route key={index} path={path} element={<Component key={index} />} />
    }
    );
    return (
        <main>
            <Routes>{routeComponents}</Routes>
        </main>

    );
}
export default Main;


