import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import {
  Avatar,
  InlineTextButton,
  Logo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
} from '../../components';
import { TopbarSearchForm } from '../../forms';


import css from './TopbarDesktop.css';

const TopbarDesktopEvent = props => {
  const {
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
 


   const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      form="TopbarSearchFormDesktop"
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  ); 

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const inboxLink = isAuthenticated ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        <FormattedMessage id="TopbarDesktop.inbox" />
        {notificationDot}
      </span>
    </NamedLink>
  ) : null;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = isAuthenticated ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="ManageEventListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageEventListingsPage'))}
            name="ManageEventListingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton className={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;

  
  const rentalsPage = (
    <NamedLink name="RentalsListPage" className={css.rentalsPage}>
      <span className={css.rentals}>
        <FormattedMessage id="TopbarDesktop.rentals" />
      </span>
    </NamedLink>   
  )
   const merchantPage = (
    <NamedLink name="MerchantPage" className={css.merchantPage}>
      <span className={css.merchant}>
        <FormattedMessage id="TopbarDesktop.merchant" />
      </span>
    </NamedLink>   
  );
 
  const guidedToursPage = (
    <NamedLink name="GuidedToursPage" className={css.guidedToursPage}>
      <span className={css.guidedTours}>
        <FormattedMessage id="TopbarDesktop.guidedTours" />
      </span>
    </NamedLink>
  )

  const eventsPage = (
    <NamedLink name="EventsPage" className={css.eventsPage}>
      <span className={css.events}>
        <FormattedMessage id="TopbarDesktop.events" />
      </span>
    </NamedLink>
  )
  const aboutPage = (
    <NamedLink name="AboutPage" className={css.aboutPage}>
      <span className={css.about}>
        <FormattedMessage id="TopbarDesktop.about" />
      </span>
    </NamedLink>
  )

  const blogPage = (
    <NamedLink name="BlogPage" className={css.blogPage}>
      <span className={css.blog}>
        <FormattedMessage id="TopbarDesktop.blog" />
      </span>
    </NamedLink>
  )
  const contactUsPage = (
    <NamedLink name="ContactUsPage" className={css.contactUsPage}>
      <span className={css.contactUs}>
        <FormattedMessage id="TopbarDesktop.contactUs" />
      </span>
    </NamedLink>
  )

  
  const addBike = (
    <NamedLink name="AddServicePage" className={css.newListingPage}>
      <span className={css.newListing}> <i className="ui plus icon"></i>
        <FormattedMessage id="TopBarDesktop.toAddServicePage" />
       </span>
    </NamedLink>    
  )

              
 

  const signupLink = isAuthenticated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}>
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  const loginLink = isAuthenticated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );

  return (

    
    <nav className={classes}>
      <NamedLink className={css.logoLink} name="LandingPage">      
        <Logo
          format="desktop"
          className={css.logo}
          alt={intl.formatMessage({ id: 'TopbarDesktop.logo' })}
        />
      </NamedLink>
      
      {rentalsPage} 
      {merchantPage}
      {guidedToursPage}
       {eventsPage}
      {aboutPage}
     
     
      {search}
      {addBike}
      {inboxLink}
      {profileMenu}     
      {signupLink}
      {loginLink}
    </nav>
  );
};

const { bool, func, object, number, string } = PropTypes;

TopbarDesktopEvent.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
};

TopbarDesktopEvent.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
};

export default TopbarDesktopEvent;
