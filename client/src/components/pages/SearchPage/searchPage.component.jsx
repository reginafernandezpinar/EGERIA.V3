// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Components
import MainLayout from '../../layout/MainLayout';
import TripCard from '../../trips/TripCard/tripCard.component';

// Import global resources
import mapImage from "../../../assets/img/mapImage.png";

// Import styles
import "./styles.scss";


class SearchPage extends React.Component {
    render() {
        const { searchResults } = this.props;
        return (
            <MainLayout>
                <div className="search-results-page" style={{ "background-image": `url(${mapImage})` }}>
                    <h1>Your Search Results</h1>
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
                    </div>
                    <div>
                        <h5>Still is not what you´re looking for? Try it again</h5>
                    </div>
                </div>

            </MainLayout>
        );
    }
}

export default withRouter(SearchPage);