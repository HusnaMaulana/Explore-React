import React, { Component } from 'react';
import InputField from './InputField';
import Result from './Result';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input1: null,
      input2: null,
      operator: '+',
      result: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseFloat(value)});
  };

  handleOperatorChange = (event) => {
    this.setState({ operator: event.target.value });
  };

  calculateResult = () => {
    const { input1, input2, operator } = this.state;
    let result = 0;
    switch (operator) {
      case '+':
        result = input1 + input2;
        break;
      case '-':
        result = input1 - input2;
        break;
      case '*':
        result = input1 * input2;
        break;
      case '/':
        result = input1 / input2;
        break;
      default:
        result = 0;
    }
    this.setState({ result });
  };

  render() {
    return (
      <div className="Calculator">
        <h1>React Calculator</h1>
        <InputField
          name="input1"
          value={this.state.input1}
          onChange={this.handleInputChange}
        />
        <select name="operator" onChange={this.handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <InputField
          name="input2"
          value={this.state.input2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.calculateResult}>=</button>
        <Result result={this.state.result} />
      </div>
    );
  }
}

export default Calculator;
