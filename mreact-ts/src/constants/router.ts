import CharInfo from "../components/CharInfo";
import SimpleReducer from "../components/SimpleReducer";
import Home from "../components/Home";
import CalculatorApp from "../components/CalculatorApp";
import Application from "../components/Application";
import SimpleCounterHook from "../components/SimpleCounterHook";
import SimpleCounter from "../components/SimpleCounter";
import Children from "../components/Children";
import Question from "../components/Question";

export interface IRoute extends AdditionalProps {
  path: string;
  Component: React.ElementType;
  exact: boolean;
  name: string;
}

interface AdditionalProps {
  style?: React.CSSProperties;
  incident?: string;
}

export const routes: IRoute[] = [
  {
    path: "/home",
    Component: Home,
    exact: true,
    name: "Home"
  },
  {
    path: "/simplereducer",
    Component: SimpleReducer,
    exact: true,
    name: "Simple Reducer"
  },
  {
    path: "/calculatorapp",
    Component: CalculatorApp,
    exact: true,
    name: "Calculator App"
  },
  {
    path: "/application",
    Component: Application,
    exact: true,
    name: "Application"
  },
  {
    path: "/simplecounterhook",
    Component: SimpleCounterHook,
    exact: true,
    name: "Simple Counter Hook"
  },
  {
    path: "/simplecounter",
    Component: SimpleCounter,
    incident: "Test",
    exact: true,
    name: "Simple Counter"
  },
  {
    path: "/children",
    Component: Children,
    exact: true,
    name: "Children"
  },
  {
    path: "/question",
    Component: Question,
    exact: true,
    name: "Question App"
  },
  {
    path: "/charinfo",
    Component: CharInfo,
    exact: true,
    name: "Character Info App"
  },
];
