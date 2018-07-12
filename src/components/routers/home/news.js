import React from 'react';
import { Link } from 'react-router-dom';

const News = ({news}) =>( 
    <div className="newsContent">     
      <p className="news-date"> {news.date} </p>
      <p className="news-header">{news.header}</p>
      <p className="news-body">{news.content}</p>
      <Link className="readmore" to="/">{news.readmore}</Link><hr />
    </div>  
)

export default News;