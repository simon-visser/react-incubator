import React from 'react';

function ThumbnailElement(props) {
  return (
    <div className="thumbnail">
      <img src="..." alt="..." />
      <div className="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p>
          <a href="#" className="btn btn-primary" role="button">
            Button
          </a>{' '}
          <a href="#" className="btn btn-default" role="button">
            Button
          </a>
        </p>
      </div>
    </div>
  );
}

export default ThumbnailElement;
