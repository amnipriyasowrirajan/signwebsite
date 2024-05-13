import React from "react";
import "../SignBox/SignBox.css";
import SignItems from "./SignItems";

const SignMain = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4 display"> Sign Box</h1>
          <p className="lead">
            Whether interior or exterior, lightboxes are a cost effective way
            for customers to find your business. With a variety of
            customizations and lighting options, these signs are a
            cost-effective and essential way to promote your business and help
            customers find you. At Signify, we work with you to provide the
            brightest signs at a reasonable price.
          </p>
          <h2>OUR DESIGNS</h2>
        </div>
      </div>
      <SignItems />
    </>
  );
};

export default SignMain;
