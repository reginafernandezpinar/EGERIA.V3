import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../CategoryList';

class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card bg-dark text-white">
                <img src="..." className="card-img" alt="..."></img>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        )
    }
}
export default Categories;
