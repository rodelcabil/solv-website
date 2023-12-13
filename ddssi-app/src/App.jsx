import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import ScrollToTop from './scrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Loader from './components/Loader/loader';
AOS.init();

const LazyHomePage = lazy(() => import('./pages/main'));
const LazyAboutPage = lazy(() => import('./pages/AboutPage/about-page'));
const LazySolv24 = lazy(() => import('./pages/Solutions/Solv24/solv24'));
const LazyAccounting = lazy(() => import('./pages/Solutions/Accounting/accounting'));
const LazySalesAndInventory = lazy(() => import('./pages/Solutions/SalesAndInventory/sales-and-inventory'));
const LazyHRSolutionsPage = lazy(() => import('./pages/Solutions/HRSolutions/hr-solutions'));
const LazyPointOfSalePage = lazy(() => import('./pages/Solutions/PointOfSale/point-of-sale'));
const LazyAddOnsPage = lazy(() => import('./pages/Solutions/AddOns/add-ons'));
const LazyECommercePage = lazy(() => import('./pages/Solutions/ECommerce/ecommerce'));
const LazyC2CPage = lazy(() => import('./pages/Solutions/C2CSocialMedia/c2cSocial-media'));
const LazyOtherServicesPage = lazy(() => import('./pages/Solutions/OtherServices/other-services'));
const LazyPrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy/privacy-policy'));
const LazyCustomPage = lazy(() => import('./pages/Solutions/Custom/custom'));
const LazyWarrantySecurityPage = lazy(() => import('./pages/WarrantySecurity/warranty-security'));
const LazyTermsOfUsePage = lazy(() => import('./pages/TermsOfUse/terms-of-use'));
const LazySolvMeetPage = lazy(() => import('./pages/SolvMeet/solv-meet'));
const LazyMeetingPage = lazy(() => import('./pages/MeetingPage/meeting'));
const LazyContactPage = lazy(() => import('./pages/ContactPage/contact-page'));
const LazyPageNotFoundPage = lazy(() => import('./pages/404/page-not-found'));


function App() {
  return (
    <>
      <Router>
      <Suspense fallback={<Loader />}>
        <GlobalStyle/>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={LazyHomePage} />
          <Route path="/about" exact component={LazyAboutPage} />
          <Route path="/solution/solv-24" exact component={LazySolv24} />
          <Route path="/solution/accounting" exact component={LazyAccounting} />
          <Route path="/solution/sales-and-inventory" exact component={LazySalesAndInventory} />
          <Route path="/solution/hr-solutions" exact component={LazyHRSolutionsPage} />
          <Route path="/solution/point-of-sale" exact component={LazyPointOfSalePage} />
          <Route path="/solution/add-ons" exact component={LazyAddOnsPage} />
          <Route path="/solution/custom" exact component={LazyCustomPage} />
          <Route path="/solution/e-commerce" exact component={LazyECommercePage} />
          <Route path="/solution/c-to-c-and-social-media-platform" component={LazyC2CPage} />
          <Route path="/solution/other-services" component={LazyOtherServicesPage} />
          <Route path="/privacy-policy" exact component={LazyPrivacyPolicyPage} />
          <Route path="/warranty-and-security" exact component={LazyWarrantySecurityPage} />
          <Route path="/terms-of-use" exact component={LazyTermsOfUsePage} />
          <Route path="/solv-meet" exact component={LazySolvMeetPage} />
          <Route path="/solv-meet/meeting/:roomName" exact component={LazyMeetingPage} />
          <Route path="/contact-page" exact component={LazyContactPage} />
          <Route component={LazyPageNotFoundPage} />  
        </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App