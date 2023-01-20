import React from 'react';
import calculate from './logic/calculate';

class CalcUserInterface extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section>
        <div className="container">
          <div className="header">
            <button type="button" className="tag">
              {total}
              {operation}
              {next}
            </button>
          </div>
          <div className="calc-button">
            <button type="submit" onClick={this.handleClick}>AC</button>
            <button type="submit" onClick={this.handleClick}>+/-</button>
            <button type="submit" onClick={this.handleClick}>%</button>
            <button type="submit" onClick={this.handleClick} className="box-color">÷</button>
            <button type="submit" onClick={this.handleClick}>7</button>
            <button type="submit" onClick={this.handleClick}>8</button>
            <button type="submit" onClick={this.handleClick}>9</button>
            <button type="submit" onClick={this.handleClick} className="box-color">x</button>
            <button type="submit" onClick={this.handleClick}>4</button>
            <button type="submit" onClick={this.handleClick}>5</button>
            <button type="submit" onClick={this.handleClick}>6</button>
            <button type="submit" onClick={this.handleClick} className="box-color">-</button>
            <button type="submit" onClick={this.handleClick}>1</button>
            <button type="submit" onClick={this.handleClick}>2</button>
            <button type="submit" onClick={this.handleClick}>3</button>
            <button type="submit" onClick={this.handleClick} className="box-color">+</button>
            <button type="submit" onClick={this.handleClick} className="zero">0</button>
            <button type="submit" onClick={this.handleClick}>.</button>
            <button type="submit" onClick={this.handleClick} className="box-color">=</button>
          </div>
        </div>
      </section>
    );
  }
}
export default CalcUserInterface;
