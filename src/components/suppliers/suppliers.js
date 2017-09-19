import * as JsSearch from 'js-search';
import ComicStockAPI from 'comic_stockweb_api';
import React from 'react';
import AlertContainer from 'react-alert';
import SupplierDisplay from './supplier-display';
import SupplierList from './supplier-list';
import SupplierSearch from './supplier-search';
import { PropSuppliers } from './supplier-props';

// TODO: Split suppliers display and suppliers list into different components,
// each referred to seperately with their own routes.
class Suppliers extends React.Component {
  constructor(props) {
    // UI Initialization
    super(props);
    this.state = {
      selectedIndex: -1,
      data: [[]],
      page: 0,
      fullData: [[]],
    };
    this.focusInput = this.focusInput.bind(this);
    // Data Initialization
    const api = new ComicStockAPI.SuppliersApi();
    api.suppliersGet((error, data) => {
      this.searchEngine = new JsSearch.Search('name');
      this.searchEngine.addIndex('city');
      this.searchEngine.addIndex('reference');
      this.searchEngine.addDocuments(data);
      const x = data.slice();
      this.setState({ fullData: x });
      this.updateData(data);
    });
  }

  setSelected(index) {
    const stateObject = {};
    const totalEntries =
      (this.state.data.length - 1) * this.entriesPerPage +
      this.state.data[this.state.data.length - 1].length;
    const totalPages = Math.floor(totalEntries / this.entriesPerPage);
    if (typeof index === 'number') {
      if (index >= totalEntries) {
        const e = { message: 'Index is out of bounds.' };
        throw e;
      }
      stateObject.page = Math.floor(index / this.entriesPerPage);
      stateObject.selectedIndex = index % this.entriesPerPage;
    } else if (typeof index === 'object' && index.length === 2) {
      if (
        index[0] > totalPages ||
        index[1] > this.entriesPerPage ||
        index[0] * this.entriesPerPage + index[1] >= totalEntries
      ) {
        const e = { message: 'Index is out of bounds.' };
        throw e;
      }
      stateObject.page = index[0];
      stateObject.selectedIndex = index[1];
    } else {
      const e = { message: 'Invalid input.' };
      throw e;
    }
    if (stateObject.page < 0) stateObject.page = 0;
    this.setState(stateObject);
  }

  handleDelete() {
    if (this.state.selectedIndex === -1) {
      this.showAlert('Please select a supplier.', 'info');
      return;
    }
    const api = new ComicStockAPI.SuppliersApi();
    const supplierId = this.state.data[this.state.page][
      this.state.selectedIndex
    ].id;
    api.suppliersDelete(supplierId, error => {
      if (!error) {
        let newData = this.unpackData();
        delete newData[
          this.state.page * this.entriesPerPage + this.state.selectedIndex
        ];
        newData = newData.filter(e => e);
        this.updateData(newData);
        this.setSelected(-1);
      }
    });
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

  handleCreate() {
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

  focusInput() {
    this.supplierInput.focus();
  }

  // TODO: Move to own file
  showAlert(alertText, succ) {
    // TODO: Enumerate succ argument
    this.alertComponent.show(alertText, {
      time: 5000,
      type: succ,
    });
  }
  // TODO: Move to own file
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale',
  };

  searchEngine = null;

  updateData(newData) {
    const xy = newData.slice();
    const array = [];
    while (xy.length) {
      array.push(xy.splice(0, this.entriesPerPage));
    }
    if (array.length === 0) {
      array.push([]);
    }
    this.setState({ data: array });
  }

  unpackData() {
    const newArray = this.state.data.slice();
    let anotherArray = [];

    let index = 0;
    while (index < newArray.length) {
      anotherArray = anotherArray.concat(newArray[index]);
      index += 1;
    }

    return anotherArray;
  }

  entriesPerPage = 10;

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
        console.warn(dataArray);
        dataArray.sort((a, b) => {
          if (a.name && b.name) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          }
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

  handleSearch(input) {
    this.setState({ page: 0 });
    if (input.target.value !== '') {
      this.updateData(this.searchEngine.search(input.target.value));
    } else {
      this.updateData(this.state.fullData);
    }
  }

  render() {
    return (
      <div className="container-fluid panel panel-default">
        <div className="row panel-heading">
          <SupplierSearch onSearch={val => this.handleSearch(val)} />
        </div>
        <div className="row panel-body">
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
            onDelete={() => this.handleDelete()}
          />
          <AlertContainer
            ref={a => {
              this.alertComponent = a;
            }}
            {...this.alertOptions}
          />
        </div>
      </div>
    );
  }
}

// Defines type of parameters
Suppliers.propTypes = PropSuppliers;

export default Suppliers;
