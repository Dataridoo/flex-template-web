import React from 'react';
import { string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { NamedLink, ResponsiveImage} from '../../components';
import { propTypes } from '../../util/types';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';

import css from './ListingCard.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;


export const ListingCardEventComponent = props => {
  
  const { className, rootClassName, listing, renderSizes, setActiveListing } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', eventDate = '', eventType= '', eventProgram = '' } = currentListing.attributes;
  const slug = createSlug(title);
  const author = ensureUser(listing.author);
  const authorName = author.attributes.profile.displayName;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;


  return (
    <div className="container">
      <div className="row">
          <div className="col-md-8">          
            <div className={css.cardTitle}>
              {richText(title, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
              })}
            </div>
            <div >
              {eventDate} &nbsp;| &nbsp;
              <NamedLink className={classes} name="EventsListingPage" params={{ id, slug }}>
                <span className={css.authorName}>              
                  <FormattedMessage         
                    id="ListingCard.hostedBy"
                    values={{ authorName }}
                  /> 
                </span>
              </NamedLink>
            </div> 
            <div>
              {eventType}
            </div> 
            <div>
              {eventProgram}
           </div> 
          </div>
          
          <div className="col-md-4">
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
              </div>
            </NamedLink> 
          </div>
        </div>
      </div>
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
