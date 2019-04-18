import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Categories extends Component {
  render() {
    const { categoriesList } = this.props;

    return (
      <Container>
        <Row>
          {categoriesList.map(category => {
            return (
              <Col key={category.id} className="card text-white" xs="6" sm="4">
                <img src={category.picture} alt="category" className="card-img" />
                <div className="card-img-overlay">
                  <Link to={`/category/${category.id}`}>
                    <h5 className="card-title">{category.label}</h5>
                  </Link>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Categories;
