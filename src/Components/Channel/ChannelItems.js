import React from "react";

import Channeldata from "./ChannelData";
import Channel from "./Channel";

const ChannelItems = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Channeldata.map((values) => {
            return (
              <>
                <Channel
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

export default ChannelItems;
