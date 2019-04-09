import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardTrip from '../CardTrip/cardTrip.component';

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCategory();
    }
    render() {
        const { categoryList, categoryError, categoryLoading } = this.props;
        if (categoryError) {
            return <p>Sorry! There was an error loading the trips</p>;
        }
        if (categoryLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-sm-4 mb-3">
                        {
                            categoryList.map((trip) => {
                                return (
                                    <CardTrip key={trip.id} trip={trip} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryList;

