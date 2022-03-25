import React, { Component } from 'react';
import Card from './Card';
import apiData from '../Data';

export class Documentation extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center-align">Documentation</h4>
        <div className="row">
          {
            apiData.map((data) => {
              return (
                <div className="col s12 m12" key={data.id}>
                  <Card
                    title={data.title}
                    url={data.url} 
                    results={data.results} 
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Documentation