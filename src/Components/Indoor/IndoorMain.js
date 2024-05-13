import React from "react";

import IndoorItems from "./IndoorItems";

const IndoorMain = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4 display"> Welcome Everyone</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <IndoorItems />
    </>
  );
};

export default IndoorMain;
