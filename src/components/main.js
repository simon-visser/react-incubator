import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
