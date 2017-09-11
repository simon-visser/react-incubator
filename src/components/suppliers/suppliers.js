import React from 'react';
// import PropTypes from 'prop-types';
import SupplierDisplay from './supplier-display';
import SupplierList from './supplier-list';
import { PropSuppliers } from './supplier-props';

const mockData = [
  {
    id: 345,
    name: '1s',
    city: 'd',
    reference: 'f',
  },
  {
    id: 6,
    name: 'Barfro',
    city: 'Day',
    reference: '56X',
  },
];

const data = mockData;

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: -1, selectedIndex: -1 };
  }

  handleClick(value) {
    this.setState({
      selected: value.id,
      selectedIndex: data.indexOf(value),
    });
  }

  render() {
    return (
      <div>
        {/* Where our list is displayed, as well as the source of change in -selected supplier- */}
        <SupplierList
          selected={this.state.selected}
          onClick={val => {
            this.handleClick(val);
          }}
          data={data}
        />
        {/* Where our -selected- state is consumed, as well as supplier displayed. */}
        <SupplierDisplay data={data[this.state.selectedIndex]} />
      </div>
    );
  }
}

// Defines type of parameters
Suppliers.propTypes = PropSuppliers;

export default Suppliers;
