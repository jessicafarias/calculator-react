import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/calculator" component={Calculator} />

    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
