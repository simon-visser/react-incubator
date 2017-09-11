import PropTypes from 'prop-types';

const PropSupplier = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  reference: PropTypes.string,
}).isRequired;

const PropSingleSupplier = {
  click: PropTypes.func.isRequired,
  value: PropSupplier,
};

const PropSupplierList = {
  onClick: PropTypes.func.isRequired,
};

const PropSuppliers = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string, // params through routes seem to always be string, so we expect it as a string and parse as int later.
    }).isRequired,
  }).isRequired,
};

const PropSupplierDisplay = {
  data: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    reference: PropTypes.string,
  }),
};

export {
  PropSupplier,
  PropSingleSupplier,
  PropSupplierList,
  PropSuppliers,
  PropSupplierDisplay,
};
