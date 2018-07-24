import React from 'react';
import { FormattedMessage } from 'react-intl';
import { richText } from '../../util/richText';

import css from './ListingPage.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescription = props => {
  const { description, frame, fork, drivetrain, components, wheelset, accessories, size, weight} = props;
  return (
    <div className={css.sectionDescription}>  
      <p className={css.descriptionTitle}>
        <strong> <FormattedMessage id="ListingPage.descriptionTitle" /></strong>
        <span className={css.description}>
          {richText(description, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>    
      <p className={css.descriptionTitle}>
        <strong> <FormattedMessage id="ListingPage.frameTitle" /></strong>
        <span className={css.description}>
          {richText(frame, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
      
      <p className={css.descriptionTitle}>
         <strong><FormattedMessage id="ListingPage.forkTitle" /></strong>
         <span className={css.description}>
          {richText(fork, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
      
      <p className={css.descriptionTitle}>
        <strong><FormattedMessage id="ListingPage.drivetrainTitle" /></strong>
        <span className={css.description}>
          {richText(drivetrain, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
      
      <p className={css.descriptionTitle}>
         <bold><FormattedMessage id="ListingPage.componentsTitle" /></bold>
         <span className={css.description}>
            {richText(components, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </span>
      </p>
      
      <p className={css.descriptionTitle}>
        <bold><FormattedMessage id="ListingPage.wheelsetTitle" /></bold>
        <span className={css.description}>
            {richText(wheelset, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord,
            })}
          </span>
      </p>
      
      <p className={css.descriptionTitle}>
        <bold><FormattedMessage id="ListingPage.accessoriesTitle" /></bold>
        <span  className={css.description}>
          {richText(accessories, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
      
      <p className={css.descriptionTitle}>
        <bold><FormattedMessage id="ListingPage.sizeTitle" /></bold>
        <span className={css.description}>
          {richText(size, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
     
      <p className={css.descriptionTitle}>
        <bold><FormattedMessage id="ListingPage.weightTitle" /></bold>
        <span className={css.description}>
          {richText(weight, {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
            longWordClass: css.longWord,
          })}
        </span>
      </p>
      
    </div>
  );
};

export default SectionDescription;
