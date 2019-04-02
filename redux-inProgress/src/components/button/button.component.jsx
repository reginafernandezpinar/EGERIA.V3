// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '@Models';

// Import global resources

// Import local resources
import styles from './button.styles.css';

///////////// Component ////////////////
export class Button extends Component {
  handleClick = () => {
    this.props.saveText(this.props.tempTest);
  };
  render() {
    return (
      <div>
        <a onClick={this.handleClick} className={styles.button}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tempTest: state.rootReducer.inputTemp,
});

const mapDispatchToProps = {
  saveText: addProduct,
};

export const ButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
