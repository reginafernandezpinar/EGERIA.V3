import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";


class CarouselTrip extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.tripList.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.tripList.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { tripList, tripError, tripLoading } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="c-carousel">
        {tripLoading && <p>Loading...</p>}
        {!tripLoading && !tripError && (
          
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            interval={7000}
          >

            {tripList.map(trip => {
              return (
                <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={trip.id}
                >
                  <div
                    className="carousel-image"
                    style={{
                      "background-image": `linear-gradient(
                        rgba(0, 0, 0, 0.2), 
                        rgba(0, 0, 0, 0.2)
                      ), url('${trip.photo}')`,
                      "background-repeat": "no-repeat",
                      "background-position": "center",
                      "background-size": "cover"
                    }}
                  />
                  <CarouselCaption
                    captionHeader={<Link to={`/trip/${trip.id}`}>{trip.name}</Link>}
                    captionText={`@${trip.userName}`}
                    className="card-img-overlay"
                  />
                </CarouselItem>
              );
            })}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(["hover", false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(["carousel"]),
  // the interval at which the carousel automatically cycles (default: 5000)
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object
};

export default CarouselTrip;
