import './style.css';
// import * as PropTypes from 'prop-types';
import Children from "./Children";

export type NameTagProps = {
  name: string
}

const NameTag = ({name}: NameTagProps) =>  {
  return (
    <main>
      <header>
        <h1>Hi!</h1>
        <p>My name is </p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
    </main>
  );
}


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

const App = () => <Children/>

export default App;
