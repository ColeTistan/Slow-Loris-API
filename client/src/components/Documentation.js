import React, { Component } from 'react';
import Card from './Card';
import apiData from '../Data';
import { Container, Row, Col } from 'react-bootstrap';
export class Documentation extends Component {
  render() {
    return (
      <div>
        <Container>
          <h4 className="text-center fs-2">Documentation</h4>
            <Row lg={1} className="g-3">
              {
                apiData.map((data) => {
                  return (
                    <Col key={data.id}>
                      <Card
                        title={data.title}
                        url={data.url} 
                        results={data.results} 
                      />
                    </Col>
                  )
                })
              }
            </Row>
        </Container>
      </div>
    )
  }
}

export default Documentation