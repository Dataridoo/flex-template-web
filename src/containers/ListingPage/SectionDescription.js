import React from 'react';
import { richText } from '../../util/richText';

import css from './ListingPage.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescription = props => {
  const { description} = props;
  return (
    <div className={css.sectionDescription}>  
        <span className={css.description}>
          {richText(description, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      
    </div>
  );
};

export default SectionDescription;
