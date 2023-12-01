import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './pages/test';
import Main from './pages/main';
import GlobalStyle from './globalStyles';
import PrivacyPolicy from './pages/PrivacyPolicy/privacy-policy'
import Solv24 from './pages/Solutions/Solv24/SalesAndInventory/solv-24';
import HRSolutions from './pages/Solutions/Solv24/HRSolutions/hr-solutions';
import PointOfSale from './pages/Solutions/Solv24/PointOfSale/point-of-sale';
import AboutPage from './pages/AboutPage/about-page';
import AddonsPage from './pages/Solutions/AddOns/add-ons';
import ECommerce from './pages/Solutions/ECommerce/ecommerce';
import C2CSocialMedia from './pages/Solutions/C2CSocialMedia/c2cSocial-media';
import OtherServices from './pages/Solutions/OtherServices/other-services';
import ScrollToTop from './scrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Custom from './pages/Solutions/Custom/custom';
import WarrantySecurity from './pages/WarrantySecurity/warranty-security';
import TermsOfUse from './pages/TermsOfUse/terms-of-use';
import SolvMeet from './pages/SolvMeet/solv-meet';
import MeetingPage from './pages/MeetingPage/meeting';
import ContactPage from './pages/ContactPage/contact-page';
AOS.init();

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/solution/solv-24/sales-and-inventory" exact component={Solv24} />
          <Route path="/solution/solv-24/hr-solutions" exact component={HRSolutions} />
          <Route path="/solution/solv-24/point-of-sale" exact component={PointOfSale} />
          <Route path="/solution/add-ons" exact component={AddonsPage} />
          <Route path="/solution/custom" exact component={Custom} />
          <Route path="/solution/e-commerce" exact component={ECommerce} />
          <Route path="/solution/c-to-c-and-social-media-platform" component={C2CSocialMedia} />
          <Route path="/solution/other-services" component={OtherServices} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/warranty-and-security" exact component={WarrantySecurity} />
          <Route path="/terms-of-use" exact component={TermsOfUse} />
          <Route path="/solv-meet" exact component={SolvMeet} />
          <Route path="/solv-meet/meeting/:roomName" exact component={MeetingPage} />
          <Route path="/contact-page" exact component={ContactPage} />
        </Switch>
        
      </Router>
    </>
  )
}

export default App