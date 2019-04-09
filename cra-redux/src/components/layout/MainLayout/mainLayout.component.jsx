import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

// Presentational component
function MainLayout(props) {
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
