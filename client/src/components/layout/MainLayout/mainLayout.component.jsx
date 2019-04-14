import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

// Presentational component
function MainLayout(props) {

  // crear la clase
  // ComponentDidMount() {
  //   //coger el token si existe, y crear una accion q llame al whoAmI
  // }

  return (
    <div>
      <Header />
      <div id="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;
