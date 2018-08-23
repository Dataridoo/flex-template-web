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
            <div className="sixteen wide column"> 
              <div className={css.VideoCenter}>  
                 <div className="ui fluid card">
                   <div className="image">
                        <ReactPlayer       
                          url='https://www.youtube.com/watch?v=Fwkq6lqRW3w'
                          className='react-player'
                          playing 
                          width="auto"       
                        />
                    </div>
                     <div className="content"> 
                        <div className="header">
                            <span className={css.PromotionContent}>
                                 <FormattedMessage id="MerchantPageVideoSection.VideoDescription" />
                            </span>
                        </div>
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