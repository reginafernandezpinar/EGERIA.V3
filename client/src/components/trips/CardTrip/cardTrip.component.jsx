import React from "react";
import GlobeCardTrip from '../TripDetail';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Fade
} from "reactstrap";


export default class CardTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
  render() {
    const { trip } = this.props;
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={trip.photo}
            alt="Trip favourite image"
          />
          <CardBody>
            <CardTitle>{trip.name}</CardTitle>
            <CardSubtitle>{trip.username}</CardSubtitle>
            <CardText>{trip.description}</CardText>
            <Button color="primary" onClick={this.toggle}>
              More detail
            </Button>
          </CardBody>
        </Card>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            <GlobeCardTrip tripId={trip.id}/>
        </Fade>
      </div>
    );
  }
}

// Presentational Component
// const CardTrip = (props) => {
//     const { trip } = props;
//     return (
//         <div>
//             <Card>
//                 <CardImg top width="100%" src={trip.photo} alt="Trip favourite image" />
//                 <CardBody>
//                     <CardTitle>{trip.name}</CardTitle>
//                     <CardSubtitle>{trip.username}</CardSubtitle>
//                     <CardText>{trip.description}</CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };
// export default CardTrip;
