import React from 'react';
import SingleSupplier from './single-supplier';
import { PropSupplierList } from './supplier-props';

function classNameGenerator(element, selected) {
  let string = 'list-group-item';
  if (element.id === selected) {
    string += ' active';
  }
  return string;
}

function SupplierList(props) {
  const listItems = props.data.map(element => (
    <SingleSupplier
      className={classNameGenerator(element, props.selected)}
      key={element.id}
      click={props.onClick}
      value={element}
    />
  ));
  return <div className="list-group">{listItems}</div>;
}

SupplierList.propTypes = PropSupplierList;

export default SupplierList;
