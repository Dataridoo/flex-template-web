import React from 'react';
import News from './news';

const NewsList = ({newsList}) =>(
  <div className="col-lg-6 colmargin">  
    {newsList.map(news => <News news={news} key={news._id} />)}
  </div>
)

export default NewsList;