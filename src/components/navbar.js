import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              WebSiteName
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/page2">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
