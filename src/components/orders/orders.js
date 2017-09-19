import React from 'react';
import ThumbnailElement from './thumbnail-element';

class Orders extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <ThumbnailElement />
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
