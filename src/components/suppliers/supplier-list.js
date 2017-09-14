import React from 'react';
import SingleSupplier from './single-supplier';
import { PropSupplierList } from './supplier-props';

function classNameGenerator(props, element, selected) {
  let string = 'list-group-item';
  if (props.data.indexOf(element) === selected) {
    string += ' active';
  }
  return string;
}

function SupplierList(props) {
  const listItems = props.data.map(element => (
    <SingleSupplier
      className={classNameGenerator(props, element, props.selected)}
      key={props.data.indexOf(element)}
      click={props.onClick}
      value={element}
    />
  ));
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>
          Suppliers
          <div className="btn-group pull-right" role="group" aria-label="...">
            <button
              type="button"
              className="btn btn-default"
              onClick={() => props.pageFn(-1)}
            >
              <span aria-hidden="true">&larr;</span> Older
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => props.onCreate(1)}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => props.pageFn(1)}
            >
              Newer <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </h4>
      </div>

      <ul className="list-group">{listItems}</ul>
    </div>
  );
}

SupplierList.propTypes = PropSupplierList;

export default SupplierList;
