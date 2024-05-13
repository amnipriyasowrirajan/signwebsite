import React from "react";
import SignRepairItems from "./SignRepairItems";
import "../SignRepair/SignRepair.css";
const SignRepairMain = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4 display"> Sign Repair</h1>
          {/* <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p> */}
        </div>
      </div>
      <SignRepairItems />
    </>
  );
};

export default SignRepairMain;
