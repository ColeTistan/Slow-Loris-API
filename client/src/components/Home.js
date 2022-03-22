import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Home = () => {

  const [slowLorises, setSlowLorises] = useState([]);
  useEffect(() => {
    fetch('https://slow-loris-api.herokuapp.com/api/61ff53ccf22e0e457c704643')
      .then(response => response.json())
      .then(data => {
        setSlowLorises(data)
      })
  }, [])
  console.log(slowLorises)

  return (
    <div className="container">
      <h4 className="center-align">
        Welcome to the Slow Loris API!
      </h4>
      <div className="row">
        <div className="col s12 m6">
          <img 
            className="materialboxed responsive-img z-depth-2" 
            src={slowLorises.image_url} 
            alt="Slow Loris"
          />
        </div>
        <div className="col s12 m6">
          <h5 className="center-align">The cutest and coolest API to learn about Slow Lorises!</h5>
          <h5 className="center-align">What is a slow loris?</h5>
          <h5 className="left-align">
            Slow lorises are a species of primates that can be found in
            Southeast Asia. They are known for their large eyes, which 
            are part of their adaption as nocturnal animals to be active
            during the night. Eight known species of slow lorises exist 
            and all of which are considered "vulnerable" or "endangered" 
            animals due to deforestation and illegal pet trade in the black market. 
            Currently, conservation efforts towards slow lorises have prevailed such
            as education to learn about them and protecting their natural habitats from human activity.
          </h5>
        </div>
      </div>
      <div className="row center-align container">
        <div className="col s12 m6">
          <Link
            className="waves-effect waves-light btn-large orange darken-1" 
            to="/documentation"
          >
            Learn More
          </Link>
        </div>
        <div className="col s12 m6">
          <a
            className="waves-effect waves-light btn-large orange darken-1" 
            href="https://ko-fi.com/cctistan" 
            target="_blank" 
            rel="noreferrer"
          >
            Like my Work? 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home