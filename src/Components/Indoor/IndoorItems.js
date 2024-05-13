import React from "react";

import Indoordata from "./IndoorData";
import Indoor from "./Indoor";

const IndoorItems = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Indoordata.map((values) => {
            return (
              <>
                <Indoor
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

export default IndoorItems;
