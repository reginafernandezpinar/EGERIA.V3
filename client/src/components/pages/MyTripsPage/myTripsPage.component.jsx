// Import libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import { withRouter } from 'react-router-dom';

// Import components
import MainLayout from '../../layout/MainLayout';
import TripForm from '../../trips/TripForm';

// Import styles
import "./styles.scss";

// Bootstrap table properties
const columns = [{
    dataField: 'name',
    text: 'Trip Name'
}, {
    dataField: 'category',
    text: 'Trip category'
}, {
    dataField: 'distance',
    text: 'Trip distance'
}];

class MyTripsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTripId: null,
            tripMode: 'new'
        };

        // Bindings
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    componentDidMount() {
        this.props.getUserTrips(this.props.user.token);
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.token) {
            if (!prevProps.user.token && this.props.user.token) {
                this.props.getUserTrips(this.props.user.token);
            }
        } else {
            this.props.history.push('/login');
        }
    }

    handleOnSelect(row) {
        this.setState({
            selectedTripId: row.id,
            tripMode: 'update'
        });
        this.props.setSelectedTrip(row);
    }

    render() {
        const { trips, user } = this.props;
        const { tripMode } = this.state;
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            classes: 'selection-row',
            hideSelectColumn: true,
            bgColor: '#fae596',
            onSelect: this.handleOnSelect,
        };

        return (
            <MainLayout>
                <div className="my-trips-page">

                    <div className="top-my-trips-page">
                        <div className="my-trips-background">
                            <h2>{user.name}'s trips</h2>
                        </div>
                    </div>

                    <div className="my-trips-container">

                        <div className="trips-table">
                            {trips.length > 0 &&
                                <BootstrapTable keyField="id"
                                    data={trips}
                                    columns={columns}
                                    selectRow={selectRow} />
                            }
                        </div>
                        <div className="button-container">
                            <button className="btn-blue" onClick={() => {
                                this.setState({ tripMode: 'new' });
                                this.props.setSelectedTrip({ category: 'gastro', companionship: 'couple' }); // These two are added so that they have a selection by default 
                            }}>
                                New Trip
                            </button>
                        </div>

                        <div>
                            <TripForm mode={tripMode} />
                        </div>
                    </div>

                </div>
            </MainLayout>
        );
    }
}

MyTripsPage.propTypes = {
    createTrip: PropTypes.func.isRequired,
    deleteTrip: PropTypes.func.isRequired,
    updateTrip: PropTypes.func.isRequired
};

export default withRouter(MyTripsPage);