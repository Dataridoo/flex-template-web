import React, {Component} from 'react';
import css from './MerchantPage.css';


import { FormattedMessage } from 'react-intl';


const news = ( 
  <div className={css.NewsBody}> 
    <p className={css.NewsDate}> 
      <FormattedMessage id="MerchantPageNewsSection.NewsDate" />
    </p>
    <p className={css.NewsHeader}> 
      <FormattedMessage id="MerchantPageNewsSection.NewsHeader" />
    </p>
    <p className={css.NewsContent}>
      <FormattedMessage id="MerchantPageNewsSection.NewsContent" />
    </p>
    <p className={css.readMore}>
      <FormattedMessage id="MerchantPageNewsSection.readMore" />
    </p>
  </div>  
  
)

class NewsSection extends Component{
  render(){
    return (   
        <div className="container">
          <div className={css.MainContainer}>
            <p className={css.MainHeader}> 
              <FormattedMessage id="MerchantPageNewsSection.MainHeader" />
            </p>  
            <div className="row">            
              <div className="col-md-4">
                {news}
              </div>
              <div className="col-md-4">
                {news}
            </div>
            <div className="col-md-4">
              {news}
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default NewsSection;
