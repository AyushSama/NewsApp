import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title , description , imageurl , newsurl} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={imageurl} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
