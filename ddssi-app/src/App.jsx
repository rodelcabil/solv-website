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
AOS.init();

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={AboutPage} />
          <Route path="/solution/solv-24/sales-and-inventory" component={Solv24} />
          <Route path="/solution/solv-24/hr-solutions" component={HRSolutions} />
          <Route path="/solution/solv-24/point-of-sale" component={PointOfSale} />
          <Route path="/solution/add-ons" component={AddonsPage} />
          <Route path="/solution/custom" component={Custom} />
          <Route path="/solution/e-commerce" component={ECommerce} />
          <Route path="/solution/c-to-c-and-social-media-platform" component={C2CSocialMedia} />
          <Route path="/solution/other-services" component={OtherServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
        
      </Router>
    </>
  )
}

export default App