import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-warning text-center text-lg-start mt-4">
          <div className="text-center p-3 col">
            &copy; 2022 Cole Tistan: &nbsp;
            <a className="text-dark" href="https://cctistan.com/">
              cctistan.com
              </a>
          </div>
        </footer>      
      </div>
    )
  }
}

export default Footer