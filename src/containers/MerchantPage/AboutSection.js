import React, {Component} from 'react';
import css from './MerchantPage.css';

import { FormattedMessage } from 'react-intl';
import SectionMap from './SectionMap/SectionMap';


const about = ( 
    <div className={css.AboutBody}>    
      <p className={css.AboutContent}>
        <FormattedMessage id="MerchantPageAboutSection.AboutContent" />
      </p>
  </div>  
  
)

class AboutSection extends Component{
  render(){
    return (  
      <div className="container"> 
        <div className={css.AboutSectionContainer}>
          <div className="row">
            <div className="col-md-6">
              <div className={css.AboutSection}>
                <div className={css.About}> 
                  <p className={css.AboutHeader}>  
                      <FormattedMessage id="MerchantPageAboutSection.AboutHeader" /> 
                  </p>
                    {about}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={css.MapSection}>
                <SectionMap />
                </div>
              </div>
            </div>        
        </div>          
      </div>
    )
  }
}

export default AboutSection;