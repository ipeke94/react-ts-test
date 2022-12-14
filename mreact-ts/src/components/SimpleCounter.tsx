import React, { ChangeEvent, Component } from 'react';
type CounterProps = {
  incident: string;
  style?: React.CSSProperties;
}

type CounterState = {
  count: number;
}

class SimpleCounter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  decrement = () => {
    this.setState(({ count: this.state.count - 1 }))
  }

  increment = () => {
    this.setState(({ count: this.state.count + 1 }))
  }

  setCount = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ count: +event.target.value })
    event.preventDefault();
  }

  //   reset = () => {
  //     this.setState(({count}) =>({count: 0}))
  //   }

  //   decrement = () => { 
  //     this.setState(({count}) => ({count: count -1 }))
  //   }

  //   increment = () => { 
  //     this.setState(({count}) => ({count: count + 1}))
  //   }


  render() {
    const { incident, style = {} } = this.props;
    const { count } = this.state;
    return (
      <main style={{ ...style }} className="counter-container">
        <h1 data-testid="header">Simple Counter {incident}</h1>
        <section className="control-buttons wrapper">
          <p className="counter-text">{count}</p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>Reset</button>
        </section>
        <section className="control-buttons">
          <form onSubmit={() => { }}>
            <label htmlFor="set-to" className="">
              Set Count Please...
            </label>
            <input id="set-to" type="number" onChange={this.setCount} value={count} />
            <input type="submit" />
          </form>
        </section>
      </main>
    )
  }
}

export default SimpleCounter;