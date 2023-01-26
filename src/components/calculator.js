import React, { useState } from 'react';
import calculate from './logic/calculate';

const CalcUserInterface = () => {
  const [state, setter] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;
  const handleClick = (event, state, setter) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setter(result);
  };
  return (
    <>
      <div className="practice">
        <h2>let&apos;s do some maths!</h2>
      </div>
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
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>AC</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>+/-</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>%</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="box-color">÷</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>7</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>8</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>9</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="box-color">x</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>4</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>5</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>6</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="box-color">-</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>1</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>2</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>3</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="box-color">+</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="zero">0</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)}>.</button>
            <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="box-color">=</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalcUserInterface;
