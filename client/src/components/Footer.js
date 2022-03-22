import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer orange darken-2">
          <div className="container">
            <div className="row">
              <div className="col s12 center-align">
                <h5 className="white-text">Slow Loris API</h5>
                <p className="grey-text text-lighten-4">The data used for this project was researched on various websites such as Wikipedia and San Diego Zoo's official webpage.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              &copy; 2022 Cole Tistan
              <a 
              className="grey-text text-lighten-4 right"
              href="https://github.com/ColeTistan/Slow-Lorises"
              target="_blank"
              rel="noreferrer"
              >
                Github
            </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer