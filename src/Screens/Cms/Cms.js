import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
// import DashboardComponent from '../../Components/Dashboard';
import NavigationContainer from '../../Containers/Navigation';

const Cms = props => (
  <div>
    <NavigationContainer />
    <div className="content-wrapper">
      <Container fluid>{props.children}</Container>
    </div>
  </div>
);

Cms.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cms;
