import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import routeConfiguration from '../../routeConfiguration';
import { LISTING_STATE_PENDING_APPROVAL, LISTING_STATE_CLOSED, propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureOwnListing } from '../../util/data';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT, createSlug } from '../../util/urlHelpers';
import { createResourceLocatorString } from '../../util/routes';
import {
  InlineTextButton,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  IconSpinner,
  ResponsiveImage,
} from '../../components';
import config from '../../config';

import MenuIcon from './MenuIcon';
import css from './ManageListingCard.css';

// Menu content needs the same padding
const MENU_CONTENT_OFFSET = -12;
const MAX_LENGTH_FOR_WORDS_IN_TITLE = 7;


const createEditListingURL = (routes, listing) => {
  const id = listing.id.uuid;
  const slug = createSlug(listing.attributes.title);
  const pathParams = { id, slug, type: 'edit', tab: 'description' };

  return createResourceLocatorString('EditEventsPage', routes, pathParams, {});
};

const createListingURL = (routes, listing) => {
  const id = listing.id.uuid;
  const slug = createSlug(listing.attributes.title);
  const isPendingApproval = listing.attributes.state === LISTING_STATE_PENDING_APPROVAL;
  const linkProps = isPendingApproval
    ? {
        name: 'EventsListingPageVariant',
        params: {
          id,
          slug,
          variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT,
        },
      }
    : {
        name: 'EventsListingPage',
        params: { id, slug },
      };

  return createResourceLocatorString(linkProps.name, routes, linkProps.params, {});
};

// Cards are not fixed sizes - So, long words in title make flexboxed items to grow too big.
// 1. We split title to an array of words and spaces.
//    "foo bar".split(/([^\s]+)/gi) => ["", "foo", " ", "bar", ""]
// 2. Then we break long words by adding a '<span>' with word-break: 'break-all';
const formatTitle = (title, maxLength) => {
  const nonWhiteSpaceSequence = /([^\s]+)/gi;
  return title.split(nonWhiteSpaceSequence).map((word, index) => {
    return word.length > maxLength ? (
      <span key={index} style={{ wordBreak: 'break-all' }}>
        {word}
      </span>
    ) : (
      word
    );
  });
};

export const ManageListingCardEventComponent = props => {
  const {
    className,
    rootClassName,
    hasClosingError,
    hasOpeningError,
    history,
    intl,
    isMenuOpen,
    actionsInProgressListingId,
    listing,
    onCloseListing,
    onOpenListing,
    onToggleMenu,
    renderSizes,
  } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  //const id = currentListing.id.uuid;
  const { title = '', price, state } = currentListing.attributes;
  const isPendingApproval = state === LISTING_STATE_PENDING_APPROVAL;
  const isClosed = state === LISTING_STATE_CLOSED;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

  const menuItemClasses = classNames(css.menuItem, {
    [css.menuItemDisabled]: !!actionsInProgressListingId,
  });

 

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  const closedOverlay = !isClosed ? null : (
    <div
      className={css.closedOverlayWrapper}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <div className={css.closedOverlay} />
      <div className={css.closedOverlayContent}>
        <div className={css.closedMessage}>
          <FormattedMessage id="ManageListingCard.closedListing" />
        </div>
        <button
          className={css.openListingButton}
          disabled={!!actionsInProgressListingId}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            if (!actionsInProgressListingId) {
              onOpenListing(currentListing.id);
            }
          }}
        >
          <FormattedMessage id="ManageListingCard.openListing" />
        </button>
      </div>
    </div>
  );

  const errorOverlay =
    hasOpeningError || hasClosingError ? (
      <div
        className={css.errorOverlayWrapper}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className={css.errorOverlay} />
        <div className={css.errorOverlayContent}>
          <div className={css.closedMessage}>
            <FormattedMessage id="ManageListingCard.actionFailed" />
          </div>
        </div>
      </div>
    ) : null;

  const pendingApprovalOverlay = isPendingApproval ? (
    <div
      className={css.pendingApprovalOverlayWrapper}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <div className={css.pendingApprovalOverlay} />
      <div className={css.pendingApprovalOverlayContent}>
        <div className={css.pendingMessage}>
          <FormattedMessage
            id="ManageListingCard.pendingApproval"
            values={{ listingTitle: title }}
          />
        </div>
      </div>
    </div>
  ) : null;

  const thisInProgress = actionsInProgressListingId;
  const loadingOrErrorOverlay = thisInProgress ? (
    <div
      className={css.loadingOverlayWrapper}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <div className={css.loadingOverlay} />
      <div className={css.loadingOverlayContent}>
        <IconSpinner />
      </div>
    </div>
  ) : (
    errorOverlay
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */

  const titleClasses = classNames(css.title, {
    [css.titlePending]: isPendingApproval,
  });

  return (
    <div
      className={classes}
      tabIndex={0}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();

        // ManageListingCard contains links, buttons and elements that are working with routing.
        // This card doesn't work if <a> or <button> is used to wrap events that are card 'clicks'.
        //
        // NOTE: It might be better to absolute-position those buttons over a card-links.
        // (So, that they have no parent-child relationship - like '<a>bla<a>blaa</a></a>')
        history.push(createListingURL(routeConfiguration(), listing));
      }}
    >
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper}>
          <ResponsiveImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            sizes={renderSizes}
          />
        </div>
        <div className={classNames(css.menuOverlayWrapper, { [css.menuOverlayOpen]: isMenuOpen })}>
          <div className={classNames(css.menuOverlay)} />
          <div className={css.menuOverlayContent}>
            <FormattedMessage id="ManageListingCard.viewListing" />
          </div>
        </div>
        <div className={css.menubarWrapper}>
          <div className={css.menubarGradient} />
          <div className={css.menubar}>
            <Menu
              className={classNames(css.menu, { [css.cardIsOpen]: !isClosed })}
              contentPlacementOffset={MENU_CONTENT_OFFSET}
              contentPosition="left"
              useArrow={false}
              onToggleActive={isOpen => {
                const listingOpen = isOpen ? currentListing : null;
                onToggleMenu(listingOpen);
              }}
              isOpen={isMenuOpen}
            >
              <MenuLabel className={css.menuLabel} isOpenClassName={css.listingMenuIsOpen}>
                <div className={css.iconWrapper}>
                  <MenuIcon className={css.menuIcon} isActive={isMenuOpen} />
                </div>
              </MenuLabel>
              <MenuContent rootClassName={css.menuContent}>
                <MenuItem key="close-listing">
                  <InlineTextButton
                    className={menuItemClasses}
                    onClick={event => {
                      event.preventDefault();
                      event.stopPropagation();
                      if (!actionsInProgressListingId) {
                        onToggleMenu(null);
                        onCloseListing(currentListing.id);
                      }
                    }}
                  >
                    <FormattedMessage id="ManageListingCard.closeListing" />
                  </InlineTextButton>
                </MenuItem>
              </MenuContent>
            </Menu>
          </div>
        </div>
        {closedOverlay}
        {pendingApprovalOverlay}
        {loadingOrErrorOverlay}
      </div>
      <div className={css.info}>
        
        <div className={css.mainInfo}>
          <div className={titleClasses}>{formatTitle(title, MAX_LENGTH_FOR_WORDS_IN_TITLE)}</div>
        </div>
        <button
          className={css.edit}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            history.push(createEditListingURL(routeConfiguration(), listing));
          }}
        >
          <FormattedMessage id="ManageListingCard.edit" />
        </button>
      </div>
    </div>
  );
};

ManageListingCardEventComponent.defaultProps = {
  className: null,
  rootClassName: null,
  actionsInProgressListingId: null,
  renderSizes: null,
};

const { bool, func, shape, string } = PropTypes;

ManageListingCardEventComponent.propTypes = {
  className: string,
  rootClassName: string,
  hasClosingError: bool.isRequired,
  hasOpeningError: bool.isRequired,
  intl: intlShape.isRequired,
  listing: propTypes.ownListing.isRequired,
  isMenuOpen: bool.isRequired,
  actionsInProgressListingId: shape({ uuid: string.isRequired }),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  onToggleMenu: func.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default compose(withRouter, injectIntl)(ManageListingCardEventComponent);
