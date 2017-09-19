import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Suppliers from './suppliers/suppliers';
import Orders from './orders/orders';

class Main extends React.Component {
  // TODO: Add 404 page
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route path="/" component={NotFoundPage} /> */}
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/order" component={Orders} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
