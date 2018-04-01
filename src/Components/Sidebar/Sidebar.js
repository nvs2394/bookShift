import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from 'reactstrap';

import SidebarItem from '../SidebarItem';

const Sidebar = props => (
  <Nav navbar className="navbar-sidenav">
    {props.sidebar.map(menuItem => (
      <SidebarItem
        key={menuItem.title}
        title={menuItem.title}
        icon={menuItem.icon}
      />
    ))}
  </Nav>
);

Sidebar.propTypes = {
  sidebar: PropTypes.arrayOf({
    title: PropTypes.string,
    icon: PropTypes.string
  })
};

Sidebar.defaultProps = {
  sidebar: []
};

export default Sidebar;
