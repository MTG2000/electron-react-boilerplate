import React from "react";

const Footer = () => {
  return (
    <div className="py-5 ">
      <div
        className="w-100 mb-0"
        style={{ background: "#444", position: "absolute", bottom: "0" }}
      >
        <div className="container py-2 row justify-content-around mx-auto">
          <p className="text-white m-0 col-md-6 text-center">
            CopyRights © Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
