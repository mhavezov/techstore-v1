import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Product from '../components/Product';
import { products } from '../products';

function HomePage() {
  return (
    <>
      <Container>
        <h1>Latest Products</h1>
        <Row>
          {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
