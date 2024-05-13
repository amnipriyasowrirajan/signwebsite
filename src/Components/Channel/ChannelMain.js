import React from "react";
import "../Channel/Channel.css";
import ChannelItems from "./ChannelItems";

const ChannelMain = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4 display"> Channel Letters</h1>
          <p className="lead">
            Channel letters are a staple of any business, providing great
            success in helping customers find your business day or night.
            Channel letters can be customized, illuminated and are excellent
            promoters of the company brand. At Signify we help you find the
            right design for your brand and bring your ideas to life.
          </p>
          <h2 className="our_design">OUR DESIGNS</h2>
        </div>
      </div>
      <ChannelItems />
    </>
  );
};

export default ChannelMain;
