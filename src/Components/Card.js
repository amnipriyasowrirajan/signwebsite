import React from "react";
import CardItem from "./CardItem";
import data from "./Data";

const Card = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {data.map((values) => {
            return (
              <>
                <CardItem
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

export default Card;
