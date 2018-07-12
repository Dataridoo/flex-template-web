import React from 'react';
import NewsList from './newsList';
import MyFancyComponent from '../home/map/Map';


const newsList = [
  {
    _id:1,
    date:"June 30, 2018",
    header:"News Header",
    content: "News content News content News content ",
    readmore: "Read more->"
  },
  {
    _id:2,
    date:"June 31, 2018",
    header:"News Header goes here",
    content: "News content goes here. News content goes here.",
    readmore: "Read more->"
  },
  {
    _id:3,
    date:"July 06, 2018",
    header:"News Header goes here",
    content: "News content goes here. News content goes here.",
    readmore: "Read more->"
  }
]

const NewsFeed = () => (
  <div className="newsfeed">
  <h5 className="news">News</h5> 
    <div className="row">      
      <NewsList newsList={newsList} /> 
      <div className="col-lg-6 colmarginMap">  
         <MyFancyComponent />         
                     
      </div>
  </div>
  </div>
 
)

export default NewsFeed;