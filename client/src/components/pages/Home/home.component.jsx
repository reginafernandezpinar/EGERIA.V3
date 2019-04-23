import React from "react";
import PropTypes from "prop-types";

// Import global resources
import landingVideo from "../../../assets/videos/sea.mp4";

// Import Components
import CarouselTrip from "../../trips/CarouselTrip";
import Categories from "../../trips/Categories";
import MainLayout from "../../layout/MainLayout";
import TripsSearch from "../../trips/TripsSearch";
import TripsGlobe from "../../trips/TripsGlobe";

// Import styles
import "./styles.scss";

class Home extends React.Component {

  componentDidMount() {
    this.props.getAllTrips();
    this.props.getAllTrackpoints();
    this.props.getCategories();
  }

  render() {
    const { userName } = this.props;
    return (
      <MainLayout>
        <main>

          {/* LANDING SECTION */}
          <div className="landing-container">

            <div className="video-container">
              <video playbackRate="0.2" loop autoPlay muted src={landingVideo}></video>
              <div className="filter"></div>

              <div className="title-container">
                {userName !== null && (
                  <h4 className="my-3">Hi {userName} !</h4>
                )}
                <h1>Plan your trip</h1>
                <h2>
                  For the avid traveller, Egeria can make a journey far more
                  interesting than usual
                </h2>
              </div>
            </div>

            <div className="search-homepage">
              <TripsSearch showTripButtons={true} redirectToSearchPage={true} />
            </div>
          </div>

          {/* GLOBE SECTION */}
          <div className="section-title">
              <h2>Explore the world</h2>
              <h4>Look for points of interest spotted by the travellers</h4>
          </div>
          <div className="globe-section">
            <TripsGlobe />
          </div>

          {/* CAROUSEL SECTION */}
          <div className="section-title">
            <h2>Selected trips</h2>
            <h4>Best valued trips from our travellers</h4>
          </div>
          <div className="homepage-carousel">
            <div className="left-section" />
            <CarouselTrip />
          </div>


          {/* CATEGORIES SECTION */}
          <div className="section-title">
            <h2>Categories</h2>
            <h4>Choose a trip by the style you want to travel</h4>
          </div>
          <div className="container p-0 mt-5">
            <Categories />
          </div>

        </main>

      </MainLayout>
    );
  }
}

Home.propTypes = {
  getAllTrips: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

export default Home;
