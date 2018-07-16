import React from 'react';
import PropTypes from 'prop-types';


import css from './LatestAdditions.css';



const LatestAdditions = props => {
  
  return (
    <div className={css.latestAdditions}>
      <h2 className={css.title}>Latest Additions</h2>
      <ul className={css.unorderList} >
        <li className={css.orderedList} >
          <p className={css.paragraph} >EVENT <span className={css.latestspan} >Some text</span></p>
        </li>
        <li className={css.orderedList} >
          <p  className={css.paragraph} >RENTAL <span className={css.latestspan}  >Some text</span></p>
        </li>
        <li className={css.orderedList} >
          <p  className={css.paragraph} >GUIDES <span className={css.latestspan}  >Some text</span></p>
        </li>
        
      </ul>
      
    </div>
  );
};

const { string } = PropTypes;

LatestAdditions.propTypes = {
  rootClassName: string,
  className: string,
};

export default LatestAdditions;
