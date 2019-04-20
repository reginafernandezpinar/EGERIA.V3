import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from 'react-router-dom';

class Categories extends Component {
  render() {
    const { categoriesList } = this.props;

    return (
      <Container>
        <Row>
          {categoriesList.map((category, i) => {
            const fullwidth = i % 3 === 0;
            let md = fullwidth ? 12 : 6;

            return (
              <Col key={category.id} xs="12" sm="6" md={md} className="p-1">

                <div className="card category-image"
                  style={{
                    "background-image": `linear-gradient(
                      rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.5)
                    ),url('${category.picture}')`
                  }}
                  onClick={() => {
                    this.props.history.push(`/category/${category.id}`);
                  }}>
                  <h4 className="m-4 text-center text-white">{category.label}</h4>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default withRouter(Categories);
