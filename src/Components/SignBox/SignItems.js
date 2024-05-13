import React from "react";

import Signdata from "./SignData";

import Sign from "./Sign";

const SignItems = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Signdata.map((values) => {
            return (
              <>
                <Sign
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

export default SignItems;
