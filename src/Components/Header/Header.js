import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Form,
  InputGroup,
  Input,
  Button
} from 'reactstrap';

const Header = () => (
  <Nav navbar className="ml-auto">
    <NavItem>
      <Form className="form-inline my-2 my-lg-0 mr-lg-2">
        <InputGroup>
          <Input placeholder="Search for..." />
          <Button color="primary"> <i className="fa fa-search" /></Button>
        </InputGroup>
      </Form>
    </NavItem>
    <NavItem>
      <NavLink href="/logout"> <i className="fa fa-fw fa-sign-out" /> Thoát </NavLink>
    </NavItem>
  </Nav>
);

export default Header;
