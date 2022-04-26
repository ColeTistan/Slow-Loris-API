import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col } from 'react-bootstrap';

export const Home = () => {

  const [slowLoris, setSlowLoris] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://slow-loris-api.herokuapp.com/api/all')
      const data = await response.json()
      const randomData = data[Math.floor(Math.random() * data.length)]
      setSlowLoris(randomData)
    } catch (error) {
      console.error('error', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="my-5">
      <Container>
        <Row xs={1} md={2} className="g-3">
          <Col className="text-center">
            <Image
              thumbnail="true"
              src={slowLoris.image_url} 
              alt="Slow Loris"
            />
          </Col>
          <Col className="text-center">
            <h4 className="text-center fw-light">The cutest, coolest API to learn about Slow Lorises!</h4>
            <p className="fw-normal fs-6">
              You might be wondering... What is a slow loris? Glad you ask!
              Slow lorises are a species of primates that can be found in
              Southeast Asia. They are known for their large eyes, which 
              are part of their adaption as nocturnal animals to be active
              during the night. Eight known species of slow lorises exist 
              and all of which are considered "vulnerable" or "endangered" 
              animals due to deforestation and illegal pet trade in the black market. 
              Currently, conservation efforts towards slow lorises have prevailed such
              as education to learn about them and protecting their natural habitats from human activity.
            </p>
          </Col>
          <Col className="text-center">
            <Link
              className="btn btn-lg btn-warning" 
              to="/documentation"
            >
              Learn More
            </Link>
          </Col>
          <Col className="text-center">
            <a
              className="btn btn-lg btn-warning mb-3" 
              href="https://ko-fi.com/cctistan" 
              target="_blank" 
              rel="noreferrer"
            >
              Like my Work? 
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home