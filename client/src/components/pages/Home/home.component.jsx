import React from "react";
import PropTypes from "prop-types";

// Import global resources
import { isAuth } from "../../../tools";
import landingVideo from "../../../assets/img/landing-video.mp4";

// Import Components
import CarouselTrip from "../../trips/CarouselTrip";
import Categories from "../../trips/Categories";
import MainLayout from "../../layout/MainLayout";

// Import styles
import "./styles.scss";

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllTrips();
    this.props.getCategories();
  }

  render() {
    return (
      <MainLayout>
        <main>
          {/* LANDING SECTION */}
          <div className="landing-container">
            <div className="video-container">
              
              <video loop autoplay muted src={landingVideo}></video>
              <div class="filter"></div>

              <div className="py-5 col text-center">
                {isAuth() && (
                  <h4 className="my-3">Hi {this.props.userName} !</h4>
                )}
                <h1 className="my-5">Plan your trip</h1>
                <h2>
                  For the avid driver, Egeria can make a journey far more
                  interesting than usual
                </h2>
              </div>


            </div>

            <div className="homepage-search">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="input your destination"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-info"
                        type="button"
                        id="button-addon2"
                      >
                        search
                      </button>
                    </div>
                    <button type="button" className="btn btn-outline-info ml-3">
                    My trips
                    </button>
                  </div>
                </div>

          </div>

          {/* CAROUSEL SECTION */}
          <div className="mt-5 col text-center">
            <h2>Best valued trips</h2>
          </div>
          <div className="mb-5">
            <div className="col p-0">
              <div className="homepage-carousel">
                <div className="left-section" />
                <CarouselTrip />
              </div>
            </div>
          </div>

          {/* CAROUSEL SECTION */}
          <div className="container">
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
