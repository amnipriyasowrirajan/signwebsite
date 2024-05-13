import React from "react";

import Decalsdata from "./DecalsData";

import Decals from "./Decals";

const DecalsItems = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Decalsdata.map((values) => {
            return (
              <>
                <Decals
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

export default DecalsItems;
