import Card from "../Components/Card";
import React from "react";
import "../Components/Main.css";

const Main = () => {
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
      <Card />
    </>
  );
};

export default Main;
