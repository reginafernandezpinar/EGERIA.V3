// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import global resources
import { deleteLastProduct } from '@Models'; // importo la accion. Para usarla en el comp la tengo q conectar con mapDispatchToProps.
// Import local resources
import styles from './button.styles.css';

///////////// Component ////////////////
export class ButtonDelete extends Component {
  handleClick = () => {
    this.props.deleteLastProduct();
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

// const mapStateToProps = state => ({
//   listProducts: state.rootReducer.products,
// });
// Prop de lectura. Este state es el state de redux. El estado del array

const mapDispatchToProps = {
  deleteLastProduct // deleteLastProduct: deleteLastProduct
};

export const ButtonDeleteConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonDelete);
