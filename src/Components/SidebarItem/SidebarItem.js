
import React from 'react';
import PropTypes from 'prop-types';

import {
  NavItem,
  NavLink
} from 'reactstrap';

const SidebarItem = ({ title, icon, href }) => (
  <NavItem>
    <NavLink href={href}>
      <i className={`fa fa-fw ${icon}`} />
      <span className="nav-link-text">{title}</span>
    </NavLink>
  </NavItem>
);

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default SidebarItem;
