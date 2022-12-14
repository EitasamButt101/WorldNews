import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let{title, description, imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className="my-3">
        <div className="card">
  <img src={!imageUrl?"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvZmUwZjU0NGYtMTkxMi00MTI0LWJiOGUtZGFkYmFmNzQ3YTNlLmpwZw==.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}
  </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author}on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem
