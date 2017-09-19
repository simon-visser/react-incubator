import React from 'react';
import PropTypes from 'prop-types';

function SupplierSearch(props) {
  return (
    <div className="input-group col-md-12 pull-right">
      <input
        type="text"
        className="form-control"
        placeholder="Search for..."
        onChange={event => props.onSearch(event)}
      />
    </div>
  );
}

export default SupplierSearch;

SupplierSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
