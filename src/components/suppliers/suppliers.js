import ComicStockAPI from 'comic_stockweb_api';
import React from 'react';
import AlertContainer from 'react-alert';
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
      this.updateData(data);
    });
  }

  entriesPerPage = 10;

  unpackData() {
    const newArray = this.state.data.slice();
    let anotherArray = [];

    let index = 0;
    while (index < newArray.length) {
      anotherArray = anotherArray.concat(newArray[index]);
      index++;
    }

    return anotherArray;
  }

  updateData(newData) {
    const xy = newData;
    const array = [];
    while (xy.length) {
      array.push(xy.splice(0, this.entriesPerPage));
    }
    this.setState({ data: array });
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale',
  };

  showAlert(alertText, succ) {
    this.alertComponent.show(alertText, {
      time: 5000,
      type: succ,
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
        this.supplierInput.hide(false);
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
        this.supplierInput.hide(false, () => {
          this.focusInput();
        });
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
    event.preventDefault();
    const api = new ComicStockAPI.SuppliersApi();
    const supplierObject = ComicStockAPI.SupplierDto.constructFromObject({
      name: element.name,
      city: element.city,
      reference: element.reference,
    });
    if (this.state.selectedIndex > -1) {
      supplierObject.id = this.state.data[this.state.page][
        this.state.selectedIndex
      ].id;
    }

    api.suppliersPut(supplierObject, (error, data) => {
      let alertText = null;
      let alertType = null;
      if (error) {
        alertText = error.toString();
        alertType = 'error';
        this.showAlert(alertText, alertType);
        return;
      }

      alertText = 'Success';
      alertType = 'success';
      this.showAlert(alertText, alertType);

      const dataArray = this.unpackData();
      let indexSavingValue = -1;
      if (this.state.selectedIndex > -1) {
        dataArray[
          this.state.page * this.entriesPerPage + this.state.selectedIndex
        ] = data;
      } else {
        dataArray.push(data);
        dataArray.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
        indexSavingValue = dataArray.indexOf(data);
      }
      this.updateData(dataArray);
      if (indexSavingValue !== -1) {
        this.setState({
          page: Math.floor(indexSavingValue / this.entriesPerPage),
          selectedIndex: indexSavingValue % this.entriesPerPage,
        });
      }
    });
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
            this.supplierInput = input;
          }}
          data={this.state.data[this.state.page][this.state.selectedIndex]}
          onSave={(ev, el) => this.handleSave(ev, el)}
          disabled={this.state.selectedIndex > -1}
        />
        <AlertContainer
          ref={a => {
            this.alertComponent = a;
          }}
          {...this.alertOptions}
        />
      </div>
    );
  }
}

// Defines type of parameters
Suppliers.propTypes = PropSuppliers;

export default Suppliers;
