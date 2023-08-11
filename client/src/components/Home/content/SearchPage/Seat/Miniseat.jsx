import React from "react";
import seat from "./../../../../../img/seat.png";
const Miniseat = ({ name, onClick, className }) => {
  return (
    <div className={`w-8 h-7 justify-center items-center  ${className}`}>
      <h3
        className={`text-xs right-2 relative top-5 left-0.5 font-medium mr-1 text-black `}
        onClick={onClick}
      >
        {name}
      </h3>
      <img src={seat} alt="" className={`h-fit w-9 seat`} onClick={onClick} />
    </div>
  );
};

export default Miniseat;
