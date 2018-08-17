import React, {Component} from 'react';
import css from './MerchantPage.css';

import { FormattedMessage } from 'react-intl';

import { NamedLink} from '../../components';

const about = ( 
    <div className={css.AboutBody}>    
      <p className={css.AboutContent}>
        <FormattedMessage id="MerchantPageAboutSection.AboutContent" />
      </p>
  </div>  
  
)
const searchMap = (
  <NamedLink name="SearchMapPage">
    <span className={css.searchMap}>Map</span>
  </NamedLink>
)

class AboutSection extends Component{
  render(){
    return (   
      <div className="ui stackable grid">
      <div className="ui eight wide column">
        <div className={css.AboutSection}>
         <div className={css.About}> 
           <p className={css.AboutHeader}>  
              <FormattedMessage id="MerchantPageAboutSection.AboutHeader" /> 
           </p>
             {about}
         </div>
        </div>
      </div>
    <div className="ui eight wide column">
      <div className={css.MapSection}>
       {searchMap}
      </div>
    </div>
  </div>
    )
  }
}

export default AboutSection;