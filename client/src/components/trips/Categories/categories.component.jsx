import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card bg-dark text-white">
        <img
          src="https://mova.io/images/blog/travel_booking/1.jpg"
          className="card-img"
        />
        <div className="card-img-overlay">
          <Link to="/category">
            <h5 className="card-title">Card title</h5>
          </Link>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      
    );
  }
}
export default Categories;
