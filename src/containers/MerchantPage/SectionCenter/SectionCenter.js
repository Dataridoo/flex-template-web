import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl, intlShape, FormattedMessage } from 'react-intl';


import { NamedLink} from '../../../components';
import css from './SectionCenter.css';

import ImageOne from './images/bhc4.jpg';
import ImageTwo from './images/bhc5.jpg';
import ImageThree from './images/bhc6.jpg';
import ImageFour from './images/bhc7.jpg';

const rentalsPage = (
  <NamedLink name="RentalsListPage">
      <img className="card-img-top" src={ImageOne} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
  </NamedLink>   
)

const guidedToursPage = (
  <NamedLink name="GuidedToursPage">
  <img className="card-img-top" src={ImageTwo} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
  </NamedLink>
)

const eventsPage = (
  <NamedLink name="EventsSearchPage">
  <img className="card-img-top" src={ImageThree} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
  </NamedLink>
)


const accomodationPage = (
  <NamedLink name="EventsSearchPage">
  <img className="card-img-top" src={ImageFour} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
  </NamedLink>
)


const SectionCenter = () => {
  
  return (
    <div className="container">
     <div className={css.CardPadding}> 
      <div className="row">
        <div className="col-md-3">
         <div className={css.colPadding}>  
            <div className="card" >        
              {rentalsPage}
            </div>
          </div>     
        </div>
        <div className="col-md-3">
         <div className={css.colPadding}> 
            <div className="card" >        
              {guidedToursPage}
            </div> 
            </div>    
        </div>
        <div className="col-md-3">
          <div className={css.colPadding}> 
            <div className="card" >        
              {eventsPage}
            </div>  
          </div>   
        </div>
        <div className="col-md-3">
         <div className={css.colPadding}> 
          <div className="card" >        
            {accomodationPage}            
          </div> 
          </div>    
        </div> 
      </div>
    </div>
  </div>
  );
};

SectionCenter.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCenter.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCenter;
