import React, { createElement, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import { A, B } from './components/multipleExports';

class Page1 extends React.Component {
  render() {
    console.log('check jquery jQuery', jQuery);
    return (
      <div>HMMMM<A></A></div>
    )
  }
}

class Page3 extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}
class Page2 extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}
const Dash = component => routeProps => {
const DashElement = createElement(component, {
  resource, ...routeProps });

  return createElement("div", {},
    createElement(Sidebar, { resource, ...routeProps }),
    createElement(component, { resource, ...routeProps }),
  )
}
export default class Routes extends React.Component {
  render() {
var listReasource = {}
    return (
        <BrowserRouter >
          <Switch>
            <Route exact path='/login' component={Page1} />
            <Route exact path='/user-lise' component={Page2} />
            <Route exact path='/user/:firstName/:lastName/:id' component={Page3} />
          </Switch>
        </BrowserRouter>
    )
  }
}
if(typeof window !== 'undefined') {
  ReactDOM.render(<Routes />, document.getElementById('app-container'))
}
