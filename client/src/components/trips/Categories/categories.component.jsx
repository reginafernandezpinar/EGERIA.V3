import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Categories extends Component {
  render() {
    const { categoriesList } = this.props;

    return (
      <Container>
        <Row>
          {categoriesList.map((category,i) => {
            const fullwidth = i%3 === 0;
            let md = fullwidth ? 12 : 6;
            
            return (
              <Col key={category.id} xs="12" sm="6" md={md} className="p-1">
                <Link to={`/category/${category.id}`}>
                  <div className="card category-image"
                    style={{
                      "background-image": `linear-gradient(
                      rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.5)
                    ),url('${category.picture}')`
                    }}>
                      <h4 className="m-4 text-center text-white">{category.label}</h4>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Categories;
