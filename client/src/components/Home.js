import React, { Component, useEffect, useState } from "react";

export const Home = () => {
  const [slowLorises, setSlowLorises] = useState([]);
  useEffect(() => {
    fetch('https://slow-loris-api.herokuapp.com/api/61ff53ccf22e0e457c704642')
      .then(response => response.json())
      .then(data => {
        setSlowLorises(data)
      })
  }, [])
  console.log(slowLorises)

  return (
    <div className="container">
      <h4 className="center-align">
        Welcome to the Slow Loris API
      </h4>
      <h5 className="center-align">
        The cutest and coolest API to teach people about Slow Lorises!
      </h5>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={slowLorises.image_url} />
              <a className="btn-floating halfway-fab waves-effect waves-light brown lighten-1"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <span className="card-title center-align">{slowLorises.common_name}</span>
              <p>{slowLorises.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home