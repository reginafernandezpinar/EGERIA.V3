// Import libraries
import React from 'react';
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
            distance: trip.distance
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
                distance: trip.distance || ''
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
        e.preventDefault();


    }

    render() {
        const { loading } = this.props;
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
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    {loading && <p>Loading...</p>}
                </Form>

            </div>
        );
    }
}

export default withRouter(TripForm)