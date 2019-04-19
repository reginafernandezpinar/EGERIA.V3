import React, { Component } from 'react';

import { searchTrip } from "../../../tools/fuse-search";

// Import styles
import "./styles.scss";


class TripsSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    searchTrips = () => {
        const searchResults = searchTrip(this.props.trips, this.state.searchText);
        this.props.setSearchTripResults(searchResults);
    }


    render() {
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
                <button type="button" className="btn btn-outline-info ml-3">
                    My trips
                </button>
                <button type="button" className="btn btn-outline-info ml-3">
                    Start a trip
                </button>
            </div>
        );
    }
}

export default TripsSearch;

