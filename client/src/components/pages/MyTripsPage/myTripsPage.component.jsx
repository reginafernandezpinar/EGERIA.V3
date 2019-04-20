import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

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
            selectedTripId: null
        };

        // Bindings
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    componentDidMount() {
        if (this.props.user.token) {
            this.props.getUserTrips(this.props.user.token);
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.user.token && this.props.user.token) {
            this.props.getUserTrips(this.props.user.token);
        }
    }

    handleOnSelect(row) {
        this.setState({ selectedTripId: row.id });
        this.props.setSelectedTrip(row);
    }

    render() {
        const { trips } = this.props;
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            classes: 'selection-row',
            hideSelectColumn: true,
            bgColor: '#00BFFF',
            onSelect: this.handleOnSelect,
        };

        return (
            <MainLayout>
                <div className="my-trips-page">
                    <div className="container-fluid">
                        <div className="trips-table">
                            {trips.length > 0 &&
                                <BootstrapTable keyField="id"
                                    data={trips}
                                    columns={columns}
                                    selectRow={selectRow} />
                            }
                        </div>
                        <div className="button-container">
                            <button onClick={() => this.props.setSelectedTrip({})}>
                                New Trip
                            </button>
                        </div>
                        <div>
                            <TripForm />
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

export default MyTripsPage;