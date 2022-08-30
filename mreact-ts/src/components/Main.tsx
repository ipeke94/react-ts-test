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


interface AdditionalProps {
    style?: React.CSSProperties
    incident?: string,
}


interface IRoute extends AdditionalProps{
    path: string,
    Component: React.ElementType

}

const Main = () => {
    const routes: IRoute[] = [
        {
            path: "/home",
            Component: Home,
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
            Component: SimpleCounterHook,
            style: {padding: "10px"}
        },
        {
            path: "/simplecounter",
            Component: SimpleCounter,
            incident: "Test",
            style: {padding: "10px"}
        },
        {
            path: "/children",
            Component: Children
        },
        {
            path: "/question",
            Component: Question,

        },
        {
            path: "/charinfo",
            Component: CharInfo
        }
    ];

    const routeComponents = routes.map(({ path, Component, style, incident}, index: number ) => {
        return <Route key={index} path={path} 
        element={
            <Component 
                key={index} 
                style={style} 
                incident={incident}
                />
            } 
        />
    });
    return (
        <main>
            <Routes>{routeComponents}</Routes>
        </main>

    );
}
export default Main;




