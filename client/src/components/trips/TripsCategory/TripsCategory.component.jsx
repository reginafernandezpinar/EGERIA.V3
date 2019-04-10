import React, { Component } from 'react';
import CardTrip from '../CardTrip/cardTrip.component';

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
                    <div className="col-sm-4 mb-3">
                        {
                            tripsCategory.map((trip) => {
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

export default TripsCategory;

