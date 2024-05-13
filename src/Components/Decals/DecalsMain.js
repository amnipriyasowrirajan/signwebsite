import React from "react";

import DecalsItems from "./DecalsItems";

const DecalsMain = () => {
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
      <DecalsItems />
    </>
  );
};

export default DecalsMain;
