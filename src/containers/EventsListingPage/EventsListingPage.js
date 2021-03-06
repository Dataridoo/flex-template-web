/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { array, arrayOf, bool, func, shape, string, oneOf } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import routeConfiguration from '../../routeConfiguration';
import { LISTING_STATE_PENDING_APPROVAL, propTypes } from '../../util/types';
import { types as sdkTypes } from '../../util/sdkLoader';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT, createSlug } from '../../util/urlHelpers';
import { formatMoney } from '../../util/currency';
import { createResourceLocatorString, findRouteByRouteName } from '../../util/routes';
import { ensureListing, ensureOwnListing, ensureUser, userDisplayName } from '../../util/data';
import { richText } from '../../util/richText';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import {
  Page, 
  NamedRedirect,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
/* import { 
  FacebookShareButton, 
  TwitterShareButton,
} from 'react-share'; */

import { sendEnquiry, loadData, setInitialValues } from './EventsListingPage.duck';
import SectionImages from './SectionImages';
import SectionHeading from './SectionHeading';
import SectionEventProgram from './SectionEventProgram';
import SectionEventType from './SectionEventType';
import SectionDescription from './SectionDescription';
import css from './EventsListingPage.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_TITLE = 16;

const { UUID } = sdkTypes;

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: `(${price.currency})`,
      priceTitle: `Unsupported currency (${price.currency})`,
    };
  }
  return {};
};

/*  const openBookModal = (history, listing) => {
  if (!listing.id) {
    // Listing not fully loaded yet
    return;
  }
  const routes = routeConfiguration();
  history.push(
    createResourceLocatorString(
      'EventsListingPage',
      routes,
      { id: listing.id.uuid, slug: createSlug(listing.attributes.title) },
      { book: true }
    )
  );
};  */

/* const closeBookModal = (history, listing) => {
  if (!listing.id) {
    // Listing not fully loaded yet
    return;
  }
  const routes = routeConfiguration();
  history.push(
    createResourceLocatorString(
      'EventsListingPage',
      routes,
      { id: listing.id.uuid, slug: createSlug(listing.attributes.title) },
      {}
    )
  );
}; */

/* const categoryLabel = (categories, key) => {
  const cat = categories.find(c => c.key === key);
  return cat ? cat.label : key;
};  */

export class EventsListingPageComponent extends Component {
  constructor(props) {
    super(props);
    const { enquiryModalOpenForListingId, params } = props;
    this.state = {
      pageClassNames: [],
      imageCarouselOpen: false,
      enquiryModalOpen: enquiryModalOpenForListingId === params.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onContactUser = this.onContactUser.bind(this);
    this.onSubmitEnquiry = this.onSubmitEnquiry.bind(this);
  }

  handleSubmit(values) {
    const { history, getListing, params, useInitialValues } = this.props;
    const listingId = new UUID(params.id);
    const listing = getListing(listingId);

    const { bookingDates, ...bookingData } = values;

    const initialValues = {
      listing,
      bookingData,
      bookingDates: {
        bookingStart: bookingDates.startDate,
        bookingEnd: bookingDates.endDate,
      },
    };

    const routes = routeConfiguration();
    // Customize checkout page state with current listing and selected bookingDates
    const { setInitialValues } = findRouteByRouteName('CheckoutPageEvent', routes);
    useInitialValues(setInitialValues, initialValues);

    // Redirect to CheckoutPage
    history.push(
      createResourceLocatorString(
        'CheckoutPageEvent',
        routes,
        { id: listing.id.uuid, slug: createSlug(listing.attributes.title) },
        {}
      )
    );
  }

  onContactUser() {
    const { currentUser, history, useInitialValues, params, location } = this.props;

    if (!currentUser) {
      const state = { from: `${location.pathname}${location.search}${location.hash}` };

      // We need to log in before showing the modal, but first we need to ensure
      // that modal does open when user is redirected back to this listingpage
      useInitialValues(setInitialValues, { enquiryModalOpenForListingId: params.id });

      // signup and return back to listingPage.
      history.push(createResourceLocatorString('SignupPage', routeConfiguration(), {}, {}), state);
    } else {
      this.setState({ enquiryModalOpen: true });
    }
  }

  onSubmitEnquiry(values) {
    const { history, params, onSendEnquiry } = this.props;
    const routes = routeConfiguration();
    const listingId = new UUID(params.id);
    const { message } = values;

    onSendEnquiry(listingId, message.trim())
      .then(txId => {
        this.setState({ enquiryModalOpen: false });

        // Redirect to OrderDetailsPage
        history.push(
          createResourceLocatorString('OrderDetailsPage', routes, { id: txId.uuid }, {})
        );
      })
      .catch(() => {
        // Ignore, error handling in duck file
      });
  }

  render() {
    const {
     // unitType,
      //isAuthenticated,
      currentUser,
      getListing,
      getOwnListing,
      intl,
      onManageDisableScrolling,
      params: rawParams,
      location,
      scrollingDisabled,
      showListingError,
     // history,
     // reviews,
     // fetchReviewsError,
     // sendEnquiryInProgress,
     // sendEnquiryError,
      //categoriesConfig,
      //amenitiesConfig,
      eventTypeConfig,
    } = this.props;

   // const isBook = !!parse(location.search).book;
    const listingId = new UUID(rawParams.id);
    const isPendingApprovalVariant = rawParams.variant === LISTING_PAGE_PENDING_APPROVAL_VARIANT;
    const currentListing = isPendingApprovalVariant
      ? ensureOwnListing(getOwnListing(listingId))
      : ensureListing(getListing(listingId));

    const listingSlug = rawParams.slug || createSlug(currentListing.attributes.title || '');
    const params = { slug: listingSlug, ...rawParams };

    const isApproved =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_PENDING_APPROVAL;

    const pendingIsApproved = isPendingApprovalVariant && isApproved;

    // If a /pending-approval URL is shared, the UI requires
    // authentication and attempts to fetch the listing from own
    // listings. This will fail with 403 Forbidden if the author is
    // another user. We use this information to try to fetch the
    // public listing.
    const pendingOtherUsersListing =
      isPendingApprovalVariant && showListingError && showListingError.status === 403;
    const shouldShowPublicListingPage = pendingIsApproved || pendingOtherUsersListing;

    if (shouldShowPublicListingPage) {
      return <NamedRedirect name="EventsListingPage" params={params} search={location.search} />;
    }

    const {
      description = '',
      //geolocation = null,
      price = null,
      title = '',
      publicData,
    } = currentListing.attributes;

    const richTitle = (
      <span>
        {richText(title, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_TITLE,
          longWordClass: css.longWord,
        })}
      </span>
    );

    const topbar = <TopbarContainer />;

    if (showListingError && showListingError.status === 404) {
      // 404 listing not found

      return <NotFoundPage />;
    } else if (showListingError) {
      // Other error in fetching listing

      const errorTitle = intl.formatMessage({
        id: 'ListingPage.errorLoadingListingTitle',
      });

      return (
        <Page title={errorTitle} scrollingDisabled={scrollingDisabled}>
          <LayoutSingleColumn className={css.pageRoot}>
            <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <p className={css.errorText}>
                <FormattedMessage id="ListingPage.errorLoadingListingMessage" />
              </p>
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
              <Footer />
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
      );
    } else if (!currentListing.id) {
      // Still loading the listing

      const loadingTitle = intl.formatMessage({
        id: 'ListingPage.loadingListingTitle',
      });

      return (
        <Page title={loadingTitle} scrollingDisabled={scrollingDisabled}>
          <LayoutSingleColumn className={css.pageRoot}>
            <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <p className={css.loadingText}>
                <FormattedMessage id="ListingPage.loadingListingMessage" />
              </p>
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
              <Footer />
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
      );
    }

    const handleViewPhotosClick = e => {
      // Stop event from bubbling up to prevent image click handler
      // trying to open the carousel as well.
      e.stopPropagation();
      this.setState({
        imageCarouselOpen: true,
      });
    };
    const authorAvailable = currentListing && currentListing.author;
    const userAndListingAuthorAvailable = !!(currentUser && authorAvailable);
    const isOwnListing =
      userAndListingAuthorAvailable && currentListing.author.id.uuid === currentUser.id.uuid;
    //const isClosed = currentListing.attributes.state === LISTING_STATE_CLOSED;
    const currentAuthor = authorAvailable ? currentListing.author : null;
    const ensuredAuthor = ensureUser(currentAuthor);

    const bannedUserDisplayName = intl.formatMessage({
      id: 'ListingPage.bannedUserDisplayName',
    });
    const authorDisplayName = userDisplayName(ensuredAuthor, bannedUserDisplayName);

    const { formattedPrice } = priceData(price, intl);

    /* const handleMobileBookModalClose = () => {
      closeBookModal(history, currentListing);
    };
 */
    /* const handleBookingSubmit = values => {
      const isCurrentlyClosed = currentListing.attributes.state === LISTING_STATE_CLOSED;
      if (isOwnListing || isCurrentlyClosed) {
        window.scrollTo(0, 0);
      } else {
        this.handleSubmit(values);
      }
    };

    const handleBookButtonClick = () => {
      const isCurrentlyClosed = currentListing.attributes.state === LISTING_STATE_CLOSED;
      if (isOwnListing || isCurrentlyClosed) {
        window.scrollTo(0, 0);
      } else {
        openBookModal(history, currentListing);
      }
    }; */

    const listingImages = (listing, variantName) =>
      (listing.images || [])
        .map(image => {
          const variants = image.attributes.variants;
          const variant = variants ? variants[variantName] : null;

          // deprecated
          // for backwards combatility only
          const sizes = image.attributes.sizes;
          const size = sizes ? sizes.find(i => i.name === variantName) : null;

          return variant || size;
        })
        .filter(variant => variant != null);

    const facebookImages = listingImages(currentListing, 'facebook');
    const twitterImages = listingImages(currentListing, 'twitter');
    const schemaImages = JSON.stringify(facebookImages.map(img => img.url));
    const siteTitle = config.siteTitle;
    const schemaTitle = intl.formatMessage(
      { id: 'ListingPage.schemaTitle' },
      { title, price: formattedPrice, siteTitle }
    );
    
    
    //const shareUrl = "http://pedal.world";
    
    


      return (
        <Page
          title={schemaTitle}
          scrollingDisabled={scrollingDisabled}
          author={authorDisplayName}
          contentType="website"
          description={description}
          
          facebookImages={facebookImages}
          twitterImages={twitterImages}
          schema={{
            '@context': 'http://schema.org',
            '@type': 'ItemPage',
            description: description,
           
            name: schemaTitle,
            image: schemaImages,
          }}
        >
          <LayoutSingleColumn className={css.pageRoot}>
            <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <div className="container">
                <div className={css.MainEventsContainer}>
                  <h1 className={css.borderAll}>ALL</h1>
                  <div className="row">
                    <div className="col-md-8">
                      <h2> 
                        <SectionHeading
                            richTitle={richTitle} 
                          /> 
                      </h2>
                      <h3>
                        <SectionDescription publicData={publicData} /> &nbsp; | &nbsp;
                        <span className={css.textColorBlue}>
                          {authorDisplayName}                       
                        </span>
                      </h3>
                      <div className={css.descriptionBorder}>
                          <SectionEventType
                          options={eventTypeConfig}
                          selectedOptions={publicData.eventType}
                        /> 
                        <p><SectionEventProgram publicData={publicData}/></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                       <div className={css.descriptionBorder}>
                          <SectionImages                 
                            title={title}
                            listing={currentListing}
                            isOwnListing={isOwnListing}
                            editParams={{
                              id: listingId.uuid,
                              slug: listingSlug,
                              type: 'edit',
                              tab: 'description',
                            }}
                            imageCarouselOpen={this.state.imageCarouselOpen}
                            onImageCarouselClose={() => this.setState({ imageCarouselOpen: false })}
                            handleViewPhotosClick={handleViewPhotosClick}
                            onManageDisableScrolling={onManageDisableScrolling}
                          />    
                        </div> 
                      </div>
                  </div>
                </div>
              </div>          
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
             <Footer />
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
      );
    }
  }

  EventsListingPageComponent.defaultProps = {
    unitType: config.bookingUnitType,
    currentUser: null,
    enquiryModalOpenForListingId: null,
    showListingError: null,
    reviews: [],
    fetchReviewsError: null,
    sendEnquiryError: null,
    categoriesConfig: config.custom.categories,
    eventTypeConfig: config.custom.eventType,
    bikeSizeConfig: config.custom.bikeSize,
  };
  
  EventsListingPageComponent.propTypes = {
    // from withRouter
    history: shape({
      push: func.isRequired,
    }).isRequired,
    location: shape({
      search: string,
    }).isRequired,
  
    unitType: propTypes.bookingUnitType,
    // from injectIntl
    intl: intlShape.isRequired,
  
    params: shape({
      id: string.isRequired,
      slug: string,
      variant: oneOf([LISTING_PAGE_PENDING_APPROVAL_VARIANT]),
    }).isRequired,
  
    isAuthenticated: bool.isRequired,
    currentUser: propTypes.currentUser,
    getListing: func.isRequired,
    getOwnListing: func.isRequired,
    onManageDisableScrolling: func.isRequired,
    scrollingDisabled: bool.isRequired,
    enquiryModalOpenForListingId: string,
    showListingError: propTypes.error,
    useInitialValues: func.isRequired,
    reviews: arrayOf(propTypes.review),
    fetchReviewsError: propTypes.error,
    sendEnquiryInProgress: bool.isRequired,
    sendEnquiryError: propTypes.error,
    onSendEnquiry: func.isRequired,
  
    categoriesConfig: array,
    eventTypeConfig: array,
    bikeSizeConfig: array,
  };
  
  const mapStateToProps = state => {
    const { isAuthenticated } = state.Auth;
    const {
      showListingError,
      reviews,
      fetchReviewsError,
      sendEnquiryInProgress,
      sendEnquiryError,
      enquiryModalOpenForListingId,
    } = state.EventsListingPage;
    const { currentUser } = state.user;
  
    const getListing = id => {
      const ref = { id, type: 'listing' };
      const listings = getMarketplaceEntities(state, [ref]);
      return listings.length === 1 ? listings[0] : null;
    };
  
    const getOwnListing = id => {
      const ref = { id, type: 'ownListing' };
      const listings = getMarketplaceEntities(state, [ref]);
      return listings.length === 1 ? listings[0] : null;
    };
  
    return {
      isAuthenticated,
      currentUser,
      getListing,
      getOwnListing,
      scrollingDisabled: isScrollingDisabled(state),
      enquiryModalOpenForListingId,
      showListingError,
      reviews,
      fetchReviewsError,
      sendEnquiryInProgress,
      sendEnquiryError,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    onManageDisableScrolling: (componentId, disableScrolling) =>
      dispatch(manageDisableScrolling(componentId, disableScrolling)),
    useInitialValues: (setInitialValues, values) => dispatch(setInitialValues(values)),
    onSendEnquiry: (listingId, message) => dispatch(sendEnquiry(listingId, message)),
  });
  
  
  const EventsListingPage = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), injectIntl)(
    EventsListingPageComponent
  );
  
  EventsListingPage.setInitialValues = initialValues => setInitialValues(initialValues);
  EventsListingPage.loadData = loadData;
  
  export default EventsListingPage;
  