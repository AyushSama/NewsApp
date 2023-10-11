import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title , description , imageurl , newsurl  , time , source} = this.props;
    return (
      <div>
            <div className="card"> 
            <img className="card-img-top" src={imageurl} alt={imageurl}/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-body-secondary">{new Date(time).toUTCString()}</small></p>
            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
