import ComicStockAPI from 'comic_stockweb_api';
import React from 'react';
import SupplierDisplay from './supplier-display';
import SupplierList from './supplier-list';
import { PropSuppliers } from './supplier-props';

class Suppliers extends React.Component {
  constructor(props) {
    // UI Initialization
    super(props);
    this.state = { selectedIndex: -1, data: [[]], page: 0 };
    this.focusInput = this.focusInput.bind(this);
    // Data Initialization
    const api = new ComicStockAPI.SuppliersApi();
    api.suppliersGet((error, data) => {
      const xy = data;
      const array = [];
      while (xy.length) {
        array.push(xy.splice(0, 10));
      }
      this.setState({ data: array });
    });
  }

  focusInput() {
    this.supplierInput.focus();
  }

  handleClick(value) {
    this.setState(
      {
        selectedIndex: this.state.data[this.state.page].indexOf(value),
      },
      () => {
        console.warn('done');
      },
    );
  }

  handleCreate(value) {
    this.setState(
      // First we deselect the value
      {
        selectedIndex: -1,
      },
      // Then we can focus the input
      () => {
        this.focusInput();
      },
    );
  }

  page(incrementor) {
    let x = this.state.page + incrementor;
    const y = this.state.data.length - 1;
    if (x > y) {
      x = y;
    }
    if (x < 0) {
      x = 0;
    }
    this.setState({ page: x });
  }

  handleSave(event, element) {
    const api = new ComicStockAPI.SuppliersApi();
    if (this.state.selectedIndex > -1) {
      api.suppliersPatch({}, (error, data, response) => {});
    } else {
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* Where our list is displayed, as well as the source of change in -selected supplier- */}
        <SupplierList
          selected={this.state.selectedIndex}
          onCreate={val => this.handleCreate(val)}
          onClick={val => this.handleClick(val)}
          pageFn={val => this.page(val)}
          data={this.state.data[this.state.page]}
        />
        {/* Where our -selected- state is consumed, as well as supplier displayed. */}
        <SupplierDisplay
          ref={input => {
            console.warn(input);
            this.supplierInput = input;
          }}
          data={this.state.data[this.state.page][this.state.selectedIndex]}
          onSave={(ev, el) => this.handleSave(ev, el)}
          disabled={this.state.selectedIndex > -1}
        />
      </div>
    );
  }
}

// Defines type of parameters
Suppliers.propTypes = PropSuppliers;

export default Suppliers;
