import React from 'react';
import { Container } from 'reactstrap';

// import ProductComponent from '../../Components/Product';
import NavigationContainer from '../../Containers/Navigation';

const Product = () => (
  <div>
    <NavigationContainer />
    <div className="content-wrapper">
      <Container fluid>{/* <ProductComponent /> */}</Container>
    </div>
  </div>
);

export default Product;
