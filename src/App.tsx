import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Page from './components/page/Page';
import about from './data/about';
import home from './data/home';
import kc2021TShirt from './data/kryptcon/kc2021TShirt';
import kcSLTShirt from './data/kryptcon/kcSLTShirt';
import { kryptCon, kryptCon1, kryptCon2 } from './data/kryptcon/kryptCon';
import kryptCon3 from './data/kryptcon/kryptcon3';
import kryptCon5 from './data/kryptcon/kryptcon5';
import whatIsOsr from './data/what-is-osr';

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Page {...about} />
        </Route>
        <Route path="/kryptcon">
          <Page {...kryptCon} />
        </Route>
        <Route path="/kryptcon1">
          <Page {...kryptCon1} />
        </Route>
        <Route path="/kryptcon2">
          <Page {...kryptCon2} />
        </Route>
        <Route path="/kryptcon3">
          <Page {...kryptCon3} />
        </Route>
        <Route path="/kryptcon5">
          <Page {...kryptCon5} />
        </Route>
        <Route path="/what-is-osr">
          <Page {...whatIsOsr} />
        </Route>
        <Route path="/kc-sl-tshirt">
          <Page {...kcSLTShirt} />
        </Route>
        <Route path="/kc2021-tshirt">
          <Page {...kc2021TShirt} />
        </Route>
        <Route path="/">
          <Page {...home} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
