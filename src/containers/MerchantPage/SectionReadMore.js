import React, { Component } from 'react';
import { string, func, oneOfType } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import truncate from 'lodash/truncate';
import classNames from 'classnames';
import {  InlineTextButton } from '../../components';
import { ensureUser, ensureCurrentUser } from '../../util/data';
import { propTypes } from '../../util/types';
import css from './MerchantPage.css';

const BIO_COLLAPSED_LENGTH = 70;

const truncated = s => {
  return truncate(s, {
    length: BIO_COLLAPSED_LENGTH,

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
