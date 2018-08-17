import React, {Component} from 'react';

import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
import css from './MerchantPage.css';

class VideoPlayer extends Component {
  render() {
    return (

      <div className={css.PromotionBackground}>       
        <div className={css.PromotionMargin}>     
          <div className="ui stackable grid">   
            <div className="ui three wide column">                
            </div>      
            <div className="ui ten wide column">                         
              <ReactPlayer       
                url='https://www.youtube.com/watch?v=Fwkq6lqRW3w'
                className='react-player'
                playing 
                width="600px"       
              />
              <div className={css.PromotionContent}>
                <h2 >          
                  <FormattedMessage id="MerchantPageVideoSection.VideoDescription" />
                </h2>
              </div>
            </div>
            <div className="ui three wide column">
              
            </div>        
          </div>
      </div>
    </div>

      
        
      
    );
  }
}

export default VideoPlayer;