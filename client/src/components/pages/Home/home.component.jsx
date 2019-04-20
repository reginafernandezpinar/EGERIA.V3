import React from "react";
import PropTypes from "prop-types";

// Import global resources
import landingVideo from "../../../assets/videos/sea.mp4";

// Import Components
import CarouselTrip from "../../trips/CarouselTrip";
import Categories from "../../trips/Categories";
import MainLayout from "../../layout/MainLayout";
import TripsSearch from "../../trips/TripsSearch";

// Import styles
import "./styles.scss";

class Home extends React.Component {
  
  componentDidMount() {
    this.props.getAllTrips();
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

              <div className="py-5 col text-center">
                {userName !== null && (
                  <h4 className="my-3">Hi {userName} !</h4>
                )}
                <h1 className="my-5">Plan your trip</h1>
                <h2>
                  For the avid driver, Egeria can make a journey far more
                  interesting than usual
                </h2>
              </div>
            </div>

            <div className="homepage-search">
              <TripsSearch />
            </div>
          </div>

          {/* CAROUSEL SECTION */}
          <div className="container text-center">
            <h2>Best valued trips</h2>
          </div>

          <div className="homepage-carousel">
            <div className="left-section" />
            <CarouselTrip />
          </div>


          {/* CATEGORIES SECTION */}
          <div className="container text-center">
            <h2>Choose a trip by category</h2>
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
