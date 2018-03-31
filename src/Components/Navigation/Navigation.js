import React from 'react';
import PropTypes from 'prop-types';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse
} from 'reactstrap';

import Sidebar from '../Sidebar';
import Header from '../Header';
import menu from '../../Fixtures/sidebar.json';

const Navigation = ({ isOpen, toogleNavbar }) => (
  <Navbar id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <NavbarBrand className="navbar-brand-title">Holamama</NavbarBrand>
    <NavbarToggler onClick={toogleNavbar} />
    <Collapse navbar isOpen={isOpen}>
      <Sidebar sidebar={menu} />
      <Header />
    </Collapse>
  </Navbar>
);

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogleNavbar: PropTypes.func.isRequired
};

export default Navigation;
