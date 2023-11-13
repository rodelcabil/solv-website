import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './pages/test';
import Main from './pages/main';
import GlobalStyle from './globalStyles';
import PrivacyPolicy from './pages/PrivacyPolicy/privacy-policy'
import Solv24 from './pages/Solutions/Solv24/SalesAndInventory/solv-24';
import HRSolutions from './pages/Solutions/Solv24/HRSolutions/hr-solutions';
import PointOfSale from './pages/Solutions/Solv24/PointOfSale/point-of-sale';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={Test} />
          <Route path="/solution/solv-24/sales-and-inventory" component={Solv24} />
          <Route path="/solution/solv-24/hr-solutions" component={HRSolutions} />
          <Route path="/solution/solv-24/point-of-sale" component={PointOfSale} />
          <Route path="/solution/add-ons" component={Test} />
          <Route path="/solution/e-commerce" component={Test} />
          <Route path="/solution/c-to-c-and-social-media-platform" component={Test} />
          <Route path="/solution/other-services" component={Test} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </Router>
    </>
  )
}

export default App
