import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputText } from '@Models';

export class Input extends Component {
  handleChange = event => {
    this.props.saveTemp(event.currentTarget.value);
  };
  render() {
    return (
      <div>
        <label htmlFor="data">add data</label>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputTemp: state.rootReducer.inputTemp,
}); // creo la prop inputTemp, y esto me asocia la prop de mi comp a un valor del estado del padre

const mapDispatchToProps = {
  saveTemp: inputText,
};

export const InputConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
