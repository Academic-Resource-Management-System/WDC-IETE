import React from "react";

const AddressMap = () => {
  return (
    <div className="google-map-code mb-5">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.793184797424!2d80.25106529678958!3d13.048832400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663840000007%3A0x599fdc943bb973ff!2sThe%20Institution%20of%20Electronics%20and%20Telecommunication%20Engineers%20(I%20E%20T%20E)%20Chennai%20Centre!5e0!3m2!1sen!2sin!4v1693633241418!5m2!1sen!2sin"
          width="100%"
          height="400px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export { AddressMap };
