import React from "react";
import PropTypes from "prop-types";

// Import global resources
import { isAuth } from "../../../tools";
import landingImg from "../../../assets/img/landingImg.jpg";

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
        <div>
          <div className="container-fluid">
            <div className="row">
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
              <div className="col w-50 vh-100">
                <img className="img-fluid" src={landingImg} />
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="col">
              <p>Best valued trips</p>
            </div>
            <div className="col">
              <div className="container">
                <CarouselTrip />
              </div>
            </div>
          </div>

          <div className="container">
            <Categories />
          </div>
        </div>
      </MainLayout>
    );
  }
}

Home.propTypes = {
  getAllTrips: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

export default Home;
