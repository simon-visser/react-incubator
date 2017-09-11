import React from 'react';
import { PropSupplierDisplay } from './supplier-props';

class SupplierDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      city: '',
      reference: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const name = nextProps.data.name;
    const city = nextProps.data.city;
    const reference = nextProps.data.reference;
    this.setState({
      name,
      city,
      reference,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    //HTML: PATCH THE NEW VALUE
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="supplierName">Supplier Name </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Supplier Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierCity">City</label>
          <input
            value={this.state.city}
            onChange={this.handleInputChange}
            name="city"
            type="text"
            className="form-control"
            placeholder="Supplier City"
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierReference">Reference Number</label>
          <input
            value={this.state.reference}
            onChange={this.handleInputChange}
            name="reference"
            type="text"
            className="form-control"
            placeholder="Reference Number"
          />
        </div>

        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}

SupplierDisplay.propTypes = PropSupplierDisplay;

export default SupplierDisplay;
