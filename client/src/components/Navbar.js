import React, { Component } from 'react';
import { Navbar as NavigationBar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Navbar extends Component {

  render() {
    return (
    <div>
      <NavigationBar bg="warning" expand="lg" className='mb-4'>
        <Container>
          <LinkContainer to="/">
            <NavigationBar.Brand>Slow Loris API</NavigationBar.Brand>
          </LinkContainer>
          <NavigationBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavigationBar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="text-center">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/documentation">
                <Nav.Link>Documentation</Nav.Link>
              </LinkContainer>
              <Nav.Link 
                href="https://ko-fi.com/cctistan" 
                target="_blank" 
                rel="noreferrer"
              >
                Sponsor
              </Nav.Link>
            </Nav>
          </NavigationBar.Collapse>
        </Container>
      </NavigationBar>
    </div>
    )
  }
}

export default Navbar