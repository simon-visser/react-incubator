import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Suppliers from './suppliers/suppliers';

class Main extends React.Component {
  // TODO: Add 404 page
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/order" component={Order} /> */}
          {/* <Route exact path="/suppliers" component={Suppliers} /> */}
          <Route path="/suppliers" component={Suppliers} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
