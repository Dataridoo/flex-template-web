import React from 'react';
import PropTypes from 'prop-types';


import css from './LatestAdditions.css';



const LatestAdditions = props => {
  
  return (
    <div >
      <table  className={css.latestTable}>
        <tr >
          <th colspan="2" className={css.latestAdditions}>Latest Additions</th>
        </tr>
        <tr>
          <td className={css.tdata}>EVENT</td>       
          <td >Some text Some text Some text Some text</td>         
        </tr>
        <tr>
          <td className={css.tdata}>EVENT</td>
          <td>Some text Some text Some text Some text</td>         
        </tr>
        <tr>
          <td className={css.tdata}>RENTAL</td>
          <td>Some text Some text Some text Some text</td>         
        </tr>
        <tr>
          <td className={css.tdata}>GUIDES</td>
          <td>Some text Some text Some text Some text</td>         
        </tr>
      </table>
    </div>
  );
};

const { string } = PropTypes;

LatestAdditions.propTypes = {
  rootClassName: string,
  className: string,
};

export default LatestAdditions;
