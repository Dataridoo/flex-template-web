import React, {Component} from 'react';
import css from './MerchantPage.css';

import { FormattedMessage } from 'react-intl';
import SectionMap from './SectionMap/SectionMap';
import SectionReadMore from './SectionReadMore';


const aboutContent = 'Pedal.world is your online destination for planning a cycling or biking holiday in Europe. We offer an overview and online booking options for bike guide services, rentals and accommodation. We promote all disciplines ranging from road cycling over mountainbiking to e-bikes and fat bikes for beginners to enthusiasts alike.';
const about = ( 
    <div className={css.AboutBody}>    
      <p className={css.AboutContent}>
        <SectionReadMore bio={aboutContent} />
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