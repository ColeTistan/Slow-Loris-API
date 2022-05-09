import React from 'react'
import { Card as CardObj, Badge } from 'react-bootstrap'

function Card(props) {
  const resultStyle = {
    "whiteSpace": "normal"
  }
  return (
    <div>
      <CardObj>
        <CardObj.Body className="text-center bg-warning text-dark">
          <CardObj.Title className="fs-3">
            GET - {props.title}
          </CardObj.Title>
          <CardObj.Text>
            <a className="text-decoration-none text-dark" href={props.url} target="_blank">{props.url}</a>
          </CardObj.Text>
          <pre style={resultStyle} className="bg-light p-3 rounded">
            <code>{props.results}</code>
          </pre>
        </CardObj.Body>
      </CardObj>
    </div>
  )
}

export default Card