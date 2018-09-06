import React, { Component } from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import truncate from 'lodash/truncate';
import { InlineTextButton } from '../../components';

import css from './MerchantPage.css';

// Approximated collapsed size so that there are ~three lines of text
// in the desktop layout in the host section of the ListingPage.
const BIO_COLLAPSED_LENGTH = 170;

const truncated = s => {
  return truncate(s, {
    length: BIO_COLLAPSED_LENGTH,

    // Allow truncated text end only in specific characters. This will
    // make the truncated text shorter than the length if the original
    // text has to be shortened and the substring ends in a separator.
    //
    // This ensures that the final text doesn't get cut in the middle
    // of a word.
    separator: /\s|,|\.|:|;/,
    omission: '…',
  });
};

class SectionReadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }
  render() {
    const { expand } = this.state;
    const { className, bio } = this.props;
    const truncatedBio = truncated(bio);

    const handleShowMoreClick = () => {
      this.setState({ expand: true });
    };
    const showMore = (
      <InlineTextButton className={css.showMore} onClick={handleShowMoreClick}>
        <FormattedMessage id="UserCard.showFullBioLink" />
      </InlineTextButton>
    );
    return (
      <p className={className}>
        {expand ? bio : truncatedBio}
        {bio !== truncatedBio && !expand ? showMore : null}
      </p>
    );
  }
}

SectionReadMore.defaultProps = { className: null };

SectionReadMore.propTypes = {
  className: string,
  bio: string.isRequired,
};
export default SectionReadMore;
