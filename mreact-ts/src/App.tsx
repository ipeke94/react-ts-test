import './styles/style.scss';
import * as React from "react";
// import * as PropTypes from 'prop-types';
// import Children from "./Children";
// import Question from "./components/Question";
// import { CharType, fetchChar } from "./components/Character";
// import CharInfo  from "./components/CharInfo";
// import Loading from "./components/Loading";
// import SimpleCounter from "./components/SimpleCounter";
// import SimpleCounterHook from "./components/SimpleCounterHook";
// import Facts from "./components/Facts";
// import {FactType, fetchFacts} from "./components/Fact";
import Application from "./components/Application";


// export type NameTagProps = {
//   name: string
// }
// const NameTag = ({name}: NameTagProps) =>  {
//   return (
//     <main>
//       <header>
//         <h1>Hi!</h1>
//         <p>My name is </p>
//       </header>
//       <section className="display-name">
//         <p>{name}</p>
//       </section>
//     </main>
//   );
// }

// const NameTag = ({name}) =>  {
//   return (
//     <main>
//       <header>
//         <h1>Hi!</h1>
//         <p>My name is </p>
//       </header>
//       <section className="display-name">
//         <p>{name}</p>
//       </section>
//     </main>
//   );
// }

// NameTag.propTypes = {
//   name: PropTypes.string,
// }

// const App = () => <NameTag name={"ipek"}/>

// const App = () => <Children/>

// const App = () => <Question/>


const App = () => { 
    return (<Application/>)
    
    // return(<SimpleCounterHook style={{ padding: 10}}/>)

    //     return <SimpleCounter 
    //     incident="first test prop"
    //     style={{ padding: "10px"}}
    // />
    
    // const [character, setCharacter] = React.useState<CharType | null>(null);
    // const [loading, setLoading] = React.useState(true);
    // React.useEffect(() => {
    //     setTimeout(() => {fetchChar().then(
    //     (char) => {
    //         setCharacter(char)});
    //         setLoading(false);
    //     }, 1500)
    // }, []);
    // return (
    //     <main>
    //         {loading && <Loading/>}
    //         {character ? <CharInfo char={character}/> : null} 
    //     </main>
    // );
}

export default App;
