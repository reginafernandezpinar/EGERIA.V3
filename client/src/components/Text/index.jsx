// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import global resources
import { changeAction } from '@Models'; // importo la accion. Para usarla en el comp la tengo q conectar con mapDispatchToProps.

///////////// Component ////////////////
export class Text extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.customText.map(product => (
            <li>{product}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customText: state.rootReducer.products,
});
// Esto es una funcion. este state es el state de redux. Creamos una prop en nuestro componente y le asignamos/mapeamos el estado de redux a las props del comp.
// Es una prop de lectura. Es una funcion pq necesitamos devolver el estado entero de redux. customText es la prop q qremeos conectar
// esto va al payload

const mapDispatchToProps = {
  changeAction
};
// Esto es un objeto. Para pasar acciones a traves de una propiedad. Conecta la prop a la accion, changeAction en este caso
// Es una prop de escritura.

export const TextConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Text);

// siempre q quieras tenere acceso a redux tienes q hacer connect

// el componente puede tener 3 tipos de props: de escritura (redux), de lectura (redux) y las props del padre. La unica forma de diferenciarlas
// es  mirar abajo para ver cuales estan conectadas
