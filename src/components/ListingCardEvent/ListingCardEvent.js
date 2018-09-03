import React from 'react';
import { string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { NamedLink, ResponsiveImage, AvatarMedium} from '../../components';
import { propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';

import css from './ListingCard.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;


export const ListingCardEventComponent = props => {
  
  const { className, rootClassName, intl, listing, renderSizes, setActiveListing } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '' } = currentListing.attributes;
  const slug = createSlug(title);
  const author = ensureUser(listing.author);
  const authorName = author.attributes.profile.displayName;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;


  return (
    <NamedLink className={classes} name="EventsListingPage" params={{ id, slug }}>
      <div className={css.container}> 
        <div
            className={css.threeToTwoWrapper}
            onMouseEnter={() => setActiveListing(currentListing.id)}
            onMouseLeave={() => setActiveListing(null)}
          >
            <div className={css.aspectWrapper}>
              <ResponsiveImage
                rootClassName={css.rootForImage}
                alt={title}
                image={firstImage}
                variants={['landscape-crop', 'landscape-crop2x']}
                sizes={renderSizes}            
              />    
            </div>               
          </div>
          <div> 
            <div className={css.cardTitle}>
              {richText(title, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
              })}
            </div> 
            <div className={css.cardPricediv}>  
              <div className={css.cardPrice} >               
                  
                  <span className={css.authorName}>
                    <FormattedMessage         
                      id="ListingCard.hostedBy"
                      values={{ authorName }}
                    /> 
                  </span>
              </div>              
              
            </div> 
          </div>         
      </div>      
      
    </NamedLink>
  );
};

ListingCardEventComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  setActiveListing: () => null,
};

ListingCardEventComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingCardEventComponent);
