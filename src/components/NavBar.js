import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" color="info">
          <NavbarBrand href="/">Markdown Preview</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="https://github.com/Samk13" target='_blank'>MyGitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/samarbid/" target='_blank' >LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.freecodecamp.org/sam_arbid" target='_blank' >FCC</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}