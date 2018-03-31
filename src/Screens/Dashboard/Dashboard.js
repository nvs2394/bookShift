import React from 'react';
import { Container } from 'reactstrap';

// import DashboardComponent from '../../Components/Dashboard';
import NavigationContainer from '../../Containers/Navigation';

const Dashboard = () => (
  <div>
    <NavigationContainer />
    <div className="content-wrapper">
      <Container fluid>
        {/* <DashboardComponent /> */}
      </Container>
    </div>
  </div>
);

export default Dashboard;
