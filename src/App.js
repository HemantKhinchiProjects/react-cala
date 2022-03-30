import React from 'react';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';
import calculate from './logic/calculate';
import './style.css';

export default function App() {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={this.state.next || this.state.total || '0'} />
      <ButtonPanel clickHandler={this.handleClick} />
    </div>
  );
}
