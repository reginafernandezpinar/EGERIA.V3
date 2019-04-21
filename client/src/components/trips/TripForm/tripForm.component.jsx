// Import libraries
import React from 'react';
import { toastr } from "react-redux-toastr";
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class TripForm extends React.Component {
    constructor(props) {
        super(props);
        const { trip } = props;
        this.state = {
            name: trip.name,
            description: trip.description,
            companionship: trip.companionship,
            category: trip.category,
            startingPoint: trip.starting_point,
            destinationPoint: trip.destination_point,
            photo: trip.photo,
            distance: trip.distance,
            id: trip.id
        };
    }

    componentDidUpdate(prevProps) {                
        if (prevProps.trip !== this.props.trip) {
            const { trip } = this.props;

            this.setState({
                name: trip.name || '',
                description: trip.description || '',
                companionship: trip.companionship || '',
                category: trip.category || '',
                startingPoint: trip.starting_point || '',
                destinationPoint: trip.destination_point || '',
                photo: trip.photo || '',
                distance: trip.distance || '',
                id: trip.id
            });
        }
    }

    handleChange = event => {
        const newState = { ...this.state };
        const value = event.target.value;
        const field = event.target.name;
        newState[field] = value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        const { mode, token } = this.props;
        const { id, name, description, photo, companionship, category, distance, startingPoint, destinationPoint } = this.state;
        e.preventDefault();
        
        if (mode === 'new') {
            this.props.createTrip(token, { 
                name,
                description,
                photo,
                companionship,
                category,
                distance,
                starting_point: startingPoint,
                destination_point: destinationPoint,
                public: 1
            });
        } else if (mode === 'update') {
            this.props.updateTrip(token, { 
                name,
                description,
                photo,
                companionship,
                category,
                distance,
                starting_point: startingPoint,
                destination_point: destinationPoint,
                public: 1,
                id
            });
        }
    }

    handleDeleteTrip = (e) => {
        const { token } = this.props;
        const { id, name } = this.state;
        toastr.confirm(`Are you sure you want to remove the trip with name: ${name}?`, { 
            onOk: () => this.props.deleteTrip(token, id)
        });

    }

    render() {
        const { loading, mode } = this.props;
        const { name, description, photo, companionship, category, distance, startingPoint, destinationPoint } = this.state;        

        return (
            <div className="">
                <Form>
                    <FormGroup>
                        <Label for="tripName">Name</Label>
                        <Input type="text" name="name" id="tripName" placeholder="Trip name" onChange={this.handleChange} value={name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripName">Description</Label>
                        <Input type="textarea" name="description" id="tripDescription" placeholder="Trip description" onChange={this.handleChange} value={description} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripCategory">Category</Label>
                        <Input type="select" name="category" id="tripCategory" placeholder="Trip category" onChange={this.handleChange} value={category}>
                            <option value="gastro">Gastro</option>
                            <option value="family">Family</option>
                            <option value="monumental">Monumental</option>
                            <option value="nature">Nature</option>
                            <option value="rural">Rural</option>
                            <option value="urban">Urban</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripCompanionship">companionship</Label>
                        <Input type="select" name="companionship" id="tripCompanionship" placeholder="Trip companionship" onChange={this.handleChange} value={companionship}>
                            <option value="couple">Couple</option>
                            <option value="family">Family</option>
                            <option value="friends">Friends</option>
                            <option value="solo">Solo</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripStartingPoint">Starting Point</Label>
                        <Input type="text" name="starting_point" id="tripStartingPoint" placeholder="Trip starting point" onChange={this.handleChange} value={startingPoint} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripDestinationPoint">Destination Point</Label>
                        <Input type="text" name="destination_point" id="tripDestinationPoint" placeholder="Trip destination point" onChange={this.handleChange} value={destinationPoint} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripDistance">Distance</Label>
                        <Input type="text" name="distance" id="tripDistance" placeholder="Trip distance" onChange={this.handleChange} value={distance}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripPhoto">Photo</Label>
                        <Input type="text" name="photo" id="tripPhoto" placeholder="Trip photo" onChange={this.handleChange} value={photo} />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>
                        {mode === 'new' && 'Create trip'}
                        {mode === 'update' && 'Update trip'}
                    </Button>
                    {mode === 'update' &&
                        <Button onClick={this.handleDeleteTrip}>
                            Delete trip
                        </Button>
                    }
                </Form>
            </div>
        );
    }
}

export default withRouter(TripForm)