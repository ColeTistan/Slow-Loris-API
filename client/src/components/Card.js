import React from 'react'

function Card(props) {
  const resultStyle = {
    "whiteSpace": "normal"
  }
  return (
    <div>
      <div className="card light-blue darken-2">
        <div className="card-content white-text center-align">
          <span className="card-title center-align">
          GET - {props.title}
          </span>
          <a className="white-text" href={props.url} target="_blank">{props.url}</a>
          <hr/>
          <pre className="white-text" style={resultStyle}>
            <code>{props.results}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Card