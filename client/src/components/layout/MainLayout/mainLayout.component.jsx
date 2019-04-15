import React from 'react';

// Import local resources
import { getToken } from "../../../tools";

// Import Components
import Header from '../Header';
import Footer from '../Footer';


class MainLayout extends React.Component {

  componentDidMount() {
    const { token } = this.props;
    if (!token) {
      let sessionstorageToken = getToken();
      if (sessionStorage) {
        this.props.whoAmI(sessionstorageToken)
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
