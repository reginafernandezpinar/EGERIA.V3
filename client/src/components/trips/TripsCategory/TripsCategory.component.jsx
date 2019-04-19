import React, { Component } from 'react';
import TripCard from '../TripCard/tripCard.component';

class TripsCategory extends Component {

    render() {
        const { tripsCategory, tripsCategoryError, tripsCategoryLoading } = this.props;
        if (tripsCategoryError) {
            return <p>Sorry! There was an error loading the trips</p>;
        }
        if (tripsCategoryLoading || !Array.isArray(tripsCategory)) {
            return <p>Loading…</p>;
        }
        return (
            <div className='container'>
                <div className='row'>
                    {
                        tripsCategory.map((trip) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <TripCard key={trip.id} trip={trip} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TripsCategory;

