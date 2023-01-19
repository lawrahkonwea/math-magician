import React from 'react';

class CalcUserInterface extends React.Component { // eslint-disable-line
  render() {
    return (
      <section>
        <div className="container">
          <div className="header">0</div>
          <div className="calc-button">
            <button type="button">Ac</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="box-color">÷</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="box-color">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="box-color">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="box-color">+</button>
            <button type="button" className="zero">0</button>
            <button type="button">.</button>
            <button type="button" className="box-color">=</button>
          </div>
        </div>
      </section>
    );
  }
}
export default CalcUserInterface;
