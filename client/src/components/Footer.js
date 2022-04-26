import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="bg-warning text-center text-lg-start">
          <div class="text-center p-3 col">
            &copy; 2022 Cole Tistan: &nbsp;
            <a class="text-dark" href="https://cctistan.com/">
              cctistan.com
              </a>
          </div>
        </footer>      
      </div>
    )
  }
}

export default Footer