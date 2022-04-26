import React, { Component } from 'react';
import { Navbar as NavigationBar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export class Navbar extends Component {

  render() {
    return (
    <div>
      <NavigationBar bg="warning" expand="lg" className='shadow-sm'>
        <Container>
          <LinkContainer to="/">
            <NavigationBar.Brand>Slow Loris API</NavigationBar.Brand>
          </LinkContainer>
          <NavigationBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavigationBar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="text-center">
              <LinkContainer to="/">
                <Nav.Link>
                  <i className='bi-house'></i>
                  &nbsp;
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/documentation">
                <Nav.Link>
                  <i className='bi-file-text'></i>
                  &nbsp;
                  Documentation
                </Nav.Link>
              </LinkContainer>
              <Nav.Link 
                href="https://ko-fi.com/cctistan" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className='bi-cup'></i>
                &nbsp;
                Sponsor
              </Nav.Link>
              <Nav.Link 
                href="https://github.com/ColeTistan/Slow-Lorises" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className='bi-github'></i>
                &nbsp;
                Github
              </Nav.Link>
            </Nav>
          </NavigationBar.Collapse>
        </Container>
      </NavigationBar>
    </div>
    )
  }
}

export default Navbar;