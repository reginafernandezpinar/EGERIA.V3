import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

class CarouselTrip extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
      this.state.activeIndex === this.props.tripList.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0 ? this.props.tripList.length - 1 : this.state.activeIndex - 1;
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
      <div>
        {tripLoading && <p>Loading...</p>}
        {tripError && <p>Sorry! There was an error loading the trips</p>}
        {!tripLoading && !tripError &&
          <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
            <CarouselIndicators
              items={tripList}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {tripList.map(trip => {
              return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={trip.id}>
                  <img src={trip.photo} alt="trip" className="card-img" />
                  <CarouselCaption captionText={trip.name} captionHeader={trip.category} className="card-img-overlay" />
                </CarouselItem>
              );
            })}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        }
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
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
};

export default CarouselTrip;
