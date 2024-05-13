import React from "react";

import Signrepairdata from "./SignRepairData";
import SignRepair from "./SignRepair";

const SignRepairItems = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Signrepairdata.map((values) => {
            return (
              <>
                <SignRepair
                  key={values.id}
                  id={values.id}
                  imagesrc={values.imagesrc}
                  title={values.text}
                  button={values.button}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SignRepairItems;
