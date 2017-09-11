import React from 'react';
import { PropSingleSupplier } from './supplier-props';

function SingleSupplier(props) {
  const { value, click, className } = props;
  return (
    <a
      href="#select"
      className={className}
      onClick={() => {
        click(value);
      }}
    >
      {value.name}
    </a>
  );
}

SingleSupplier.propTypes = PropSingleSupplier;

export default SingleSupplier;
