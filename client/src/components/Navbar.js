import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  componentDidMount() {
    const materialize = window.M;
    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.sidenav');
      let instances = materialize.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
    <div>
      <nav className='brown lighten-1'>
        <div className="nav-wrapper">
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <a
                href="https://ko-fi.com/cctistan" 
                target="_blank" 
                rel="noreferrer">
                Sponsor
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <a
            href="https://ko-fi.com/cctistan" 
            target="_blank" 
            rel="noreferrer">
            Sponsor
          </a>
        </li>
      </ul>
    </div>
    )
  }
}

export default Navbar