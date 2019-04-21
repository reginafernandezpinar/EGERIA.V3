import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toastr } from "react-redux-toastr";

// Import global resources
import { searchTrip } from "../../../tools/fuse-search";


class TripsSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    componentDidUpdate(prevProps) {
        // We check if there was a change in the prop 'searchResults' and then we redirect to the search page    
        if (!prevProps.searchResults && this.props.searchResults) {
            console.log('entraaaa');
        //   this.props.history.push('/searchPage');
        } 
        // else { 
        //     toastr.error('Sorry, there are not results with that input, try another one');
        // }
    }
    
    searchTrips = () => {
        // We search in trips list any match with the input text
        const search = searchTrip(this.props.trips, this.state.searchText);
        // if ok, dispatch the search results to redux store
        this.props.setSearchTripResults(search);
        // if (this.props.searchResults.length !== 0 ) {
        //     // this.props.history.push('/search')
        // } else { 
        //     toastr.error('Sorry, there are not results with that input, try another one');
        // }
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
                <button
                    className="btn btn-outline-info ml-3"
                    onClick={() => this.props.history.push('/mytrips')}
                >
                    My trips
                </button>
                <button className="btn btn-outline-info ml-3">
                    Start a trip
                </button>
            </div>
        );
    }
}

export default withRouter(TripsSearch);

