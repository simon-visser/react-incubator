import React from 'react';
import { PropSupplierDisplay } from './supplier-props';

class SupplierDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      city: '',
      reference: '',
      hidden: false,
    };

    this.focus = this.focus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { name, city, reference } = nextProps.data || ['', '', ''];
    this.setState({ name, city, reference });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  focus() {
    this.firstInput.focus();
  }

  hide() {
    this.setState({ hidden: true });
  }

  // handleSubmit(event) {
  //   // HTML: PATCH THE NEW VALUE (or put this event in suppliers.js)
  //   event.preventDefault();
  // }

  render() {
    return (
      <form
        onSubmit={event =>
          this.props.onSave(event, {
            name: this.state.name,
            city: this.state.city,
            reference: this.state.reference,
          })}
      >
        <div className="form-group">
          <label htmlFor="supplierName">Supplier Name </label>
          <input
            ref={input => {
              this.firstInput = input;
            }}
            name="name"
            value={this.state.name || ''}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            disabled={this.props.disabled}
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierCity">City</label>
          <input
            value={this.state.city || ''}
            onChange={this.handleInputChange}
            name="city"
            type="text"
            className="form-control"
            placeholder="Supplier City"
            disabled={this.props.disabled}
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierReference">Reference Number</label>
          <input
            value={this.state.reference || ''}
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
