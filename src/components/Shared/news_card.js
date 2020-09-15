import React from 'react'

 const NewsCard= (props)=> {
    return (
            <div className="col-md-3">
                        <div className="card" key={props.news.title}>
                        <img className="card-img-top" src={props.news.urlToImage} alt={props.news.title}/>
                        <div className="card-body">
                          <h5 className="card-title">{props.news.title}</h5>
                          <p className="card-text">{props.news.description}</p>
                        </div>
                        <div className="card-footer">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        </div>
    )
}

export default NewsCard;
