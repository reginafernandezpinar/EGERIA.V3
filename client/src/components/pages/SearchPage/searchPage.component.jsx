// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Components
import MainLayout from '../../layout/MainLayout';
import TripCard from '../../trips/TripCard/tripCard.component';
import TripsSearch from "../../trips/TripsSearch"

// Import styles
import "./styles.scss";


class SearchPage extends React.Component {

    componentDidMount() {
        if (this.props.trips.length === 0) {
            this.props.getAllTrips();
        }
    }

    render() {
        const { searchResults } = this.props;
        return (
            <MainLayout>
                <div className="search-results-page">

                    <div className="top-search-page">
                        <div className="search-background"></div>
                        <div className="search-container">
                            <TripsSearch showTripButtons={false} redirectToSearchPage={false} />
                        </div>
                    </div>

                    <div className='container'>
                        <div className='row'>
                            {
                                searchResults.map((trip) => {
                                    return (
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <TripCard key={trip.id} trip={trip} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        {searchResults.length === 0 &&
                            <div className="container">Sorry but your search didn't trigger any results...</div>
                        }
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export default withRouter(SearchPage);