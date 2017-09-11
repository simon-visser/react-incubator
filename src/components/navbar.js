import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Comtelect
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/order">Place Order</Link>
            </li>
            <li>
              <Link to="/suppliers">Place Order</Link>
            </li>
            {/* <li>
              <Link to="/suppliers/345">Place Order</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
