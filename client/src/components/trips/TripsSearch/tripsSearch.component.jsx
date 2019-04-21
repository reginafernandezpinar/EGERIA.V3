import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import global resources
import { searchTrip } from "../../../tools/fuse-search";


class TripsSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    searchTrips = () => {
        const { redirectToSearchPage } = this.props;
        // We search in trips list any match with the input text
        const search = searchTrip(this.props.trips, this.state.searchText);
        // Dispatch the search results to redux store
        this.props.setSearchTripResults(search);
        // Now we redirect to the search results page
        if (redirectToSearchPage) {
            this.props.history.push('/search');
        }
    }

    render() {
        const { showTripButtons } = this.props;
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="input your destination"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={(e) => this.setState({ searchText: e.target.value })}
                    onkeypress={(e) => { e.keyCode === 13 && this.searchTrips() }}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-info"
                        type="button"
                        id="button-addon2"
                        onClick={this.searchTrips}
                    >
                        search
                    </button>
                </div>
                {showTripButtons &&
                    <button
                        className="btn btn-outline-info ml-3"
                        onClick={() => this.props.history.push('/mytrips')}
                    >
                        My trips
                    </button>
                }
                {showTripButtons &&
                    <button className="btn btn-outline-info ml-3">
                        Start a trip
                    </button>
                }
            </div>
        );
    }
}

TripsSearch.propTypes = {
    showTripButtons: PropTypes.bool,
    redirectToSearchPage: PropTypes.bool
}

export default withRouter(TripsSearch);

