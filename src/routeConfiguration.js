import React from 'react';
import {
  AboutPage,
  AddServicePage,
  AuthenticationPage,
  BlogPage,
  CheckoutPage,
  ContactDetailsPage,
  ContactUsPage,
  EditListingPage,
  EditEventsPage,
  EmailVerificationPage,
  EventsSearchPage,
  GuidedToursPage,
  InboxPage,
  LandingPage,
  ListingPage,
  EventsListingPage,
  MerchantPage,
  ManageListingsPage,
  ManageEventListingsPage,
  NotFoundPage,
  PasswordChangePage,
  PasswordRecoveryPage,
  PasswordResetPage,
  PayoutPreferencesPage,
  PrivacyPolicyPage,
  ProfilePage,
  ProfileSettingsPage,
  RentalsListPage,
  SearchPage,  
  StyleguidePage,
  TermsOfServicePage,
  TransactionPage,
} from './containers';

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

export const ACCOUNT_SETTINGS_PAGES = [
  'ContactDetailsPage',
  'PasswordChangePage',
  'PayoutPreferencesPage',
];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/',
      name: 'LandingPage',
      component: props => <LandingPage {...props} />,
    },
    {
      path: '/add',
      name: 'AddServicePage',
      component: props => <AddServicePage {...props} />,
    },
    
    {
      path: '/guide',
      name: 'GuidedToursPage',
      component: props => <GuidedToursPage {...props} tab="listings" />,
      loadData: GuidedToursPage.loadData,
    },
      
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage,
    },
    {
      path: '/service',
      name: 'MerchantPage',
      component: MerchantPage,
    },

    {
      path: '/event',
      name: 'EventsSearchPage',
      component: props => <EventsSearchPage {...props} tab="listings" />,
      loadData: EventsSearchPage.loadData,
    },
    
    {
      path: '/contactus',
      name: 'ContactUsPage',
      component: ContactUsPage,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: props => <SearchPage {...props} />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/filters',
      name: 'SearchFiltersPage',
      component: props => <RentalsListPage {...props} tab="filters" />,
      loadData: RentalsListPage.loadData,
    },
    {
      path: '/s/events',
      name: 'SearchListingsPage',
      component: props => <EventsSearchPage {...props} tab="listings" />,
      loadData: EventsSearchPage.loadData,
    },

    {
      path: '/s/listings',
      name: 'SearchEventsPage',
      component: props => <RentalsListPage {...props} tab="listings" />,
      loadData: RentalsListPage.loadData,
    },
  

    {
      path: '/rent',
      name: 'RentalsListPage',
      component: props => <RentalsListPage {...props} tab="listings" />,
      loadData: RentalsListPage.loadData,
    },
    {
      path: '/s/map',
      name: 'SearchMapPage',
      component: props => <SearchPage {...props} tab="map" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
     {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    }, 
    {
      path: '/l/:slug/:id',
      name: 'EventsListingPage',
      component: props => <EventsListingPage {...props} />,
      loadData: EventsListingPage.loadData,
    }, 
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: props => <CheckoutPage {...props} />,
      setInitialValues: CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },

    {
      path: '/event/:slug/:id/:variant',
      name: 'EventsListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EventsListingPage {...props} />,
      loadData: EventsListingPage.loadData,
    },

    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/l/:slug/:id/:type/:tab',
      name: 'EditListingPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },

    

    {
      path: '/event/:slug/:id',
      name: 'EventsListingPage',
      component: props => <EventsListingPage {...props} />,
      loadData: EventsListingPage.loadData,
    }, 
    {
      path: '/event/:slug/:id/:variant',
      name: 'EventsListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EventsListingPage {...props} />,
      loadData: EventsListingPage.loadData,
    },
    
    {
      path: '/event/new',
      name: 'NewEventsListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditEventsPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/event/:slug/:id/:type/:tab',
      name: 'EditEventsPage',
      auth: true,
      component: props => <EditEventsPage {...props} />,
      loadData: EditEventsPage.loadData,
    },
    {
      path: '/event/:id',
      name: 'EventsListingPageCanonical',
      component: props => <EventsListingPage {...props} />,
      loadData: EventsListingPage.loadData,
    },

   

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },

   
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: props => <ProfilePage {...props} />,
      loadData: ProfilePage.loadData,
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ProfileSettingsPage {...props} />,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: props => <AuthenticationPage {...props} tab="login" />,
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: props => <AuthenticationPage {...props} tab="signup" />,
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: props => <PasswordRecoveryPage {...props} />,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <InboxPage {...props} />,
      loadData: InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="customer" />,
      loadData: TransactionPage.loadData,
      setInitialValues: TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="provider" />,
      loadData: TransactionPage.loadData,
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManageListingsPage {...props} />,
      loadData: ManageListingsPage.loadData,
    },
    {
      path: '/eventlistings',
      name: 'ManageEventListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManageEventListingsPage {...props} />,
      loadData: ManageEventListingsPage.loadData,
    },

    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },
    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ContactDetailsPage {...props} />,
      loadData: ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PasswordChangePage {...props} />,
    },
    {
      path: '/account/payments',
      name: 'PayoutPreferencesPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PayoutPreferencesPage {...props} />,
      loadData: PayoutPreferencesPage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: props => <TermsOfServicePage {...props} />,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: props => <PrivacyPolicyPage {...props} />,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: props => <StyleguidePage raw {...props} />,
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: props => <PasswordResetPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EmailVerificationPage {...props} />,
    },
  ];
};

export default routeConfiguration;
