import React, {Component} from 'react';

import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
import SectionReadMore from './SectionReadMore';
import css from './MerchantPage.css';

const videoContent = 'Pedal.world is your online destination for planning a cycling or biking holiday in Europe. We offer an overview and online booking options for bike guide services, rentals and accommodation. We promote all disciplines ranging from road cycling over mountainbiking to e-bikes and fat bikes for beginners to enthusiasts alike.';

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
                    width="auto"
                  />
                <div className="card-body" >
                <div className={css.cardBody}>
                  <h4 className="card-title">                   
                    <span className={css.PromotionContent}>
                      <FormattedMessage id="MerchantPageVideoSection.VideoDescription" />
                    </span>
                    <SectionReadMore bio={videoContent}/>
                  </h4> 
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