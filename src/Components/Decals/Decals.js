import React from "react";

const Decals = ({ imagesrc, id, title, button }) => {
  return (
    <div className="col-lg-3 my-3">
      <div className="card">
        <img src={imagesrc} className="card-img-top" alt="..." />
        <p>{id}</p>
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Decals;
