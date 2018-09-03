import React, {Component} from 'react';

import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
import css from './MerchantPage.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="container" > 
        <div className={css.PromotionBackground}> 
          <div className="row" >  
            <div className="col-md-12"> 
            <div className={css.VideoCenter}>         
              <div className="card" > 
                  <ReactPlayer       
                    url='https://www.youtube.com/watch?v=Fwkq6lqRW3w'
                    className='react-player'
                    playing 
                    width="auto"
                       
                  />
                <div className="card-body" className={css.cardBody}>
                  <h4 className="card-title">                   
                    <span className={css.PromotionContent}>
                      <FormattedMessage id="MerchantPageVideoSection.VideoDescription" />
                  </span>
                  </h4>                            
                  </div>
                  </div>
                </div>     
              </div>
            </div>
          </div>
        </div>      
    );
  }
}

export default VideoPlayer;