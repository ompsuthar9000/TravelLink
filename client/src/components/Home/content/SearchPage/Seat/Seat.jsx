import React, { useEffect } from "react";
import "./seat.scss";
import driver from "./../../../../../img/stering.png";
import Miniseat from "./Miniseat";
import { Context } from "../../../../../context/AppContext";
import { useContext } from "react";
const row1 = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1"];
const row2 = ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2"];
const row3 = ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3", "J3"];
const row4 = ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4", "J4"];
const row5 = ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5", "J5"];

const Seat = () => {
  const { SN, setSN } = useContext(Context);
  useEffect(() => {}, [SN]);

  const seatBookingHandler = (el) => {
    setSN((prev) => {
      let previous = prev;
      const element = prev.includes(el);
      if (element) {
        return previous.filter((e) => e !== el);
      } else if (!element) {
        return [...previous, el];
      }
    });
  };

  return (
    <div
      className={`busbody flex flex-row  justify-between  mt-4 
       
      `}
    >
      <img src={driver} alt="" className="driver" />
      <div className=" flex flex-col md:gap-4 gap-2 divider">
        <div className="up flex flex-col">
          <div className="flex flex-row md:gap-1 ">
            {row1.map((el, i) => (
              <Miniseat
                key={i}
                name={el}
                onClick={() => seatBookingHandler(el)}
                className={SN.includes(el) && "selected"}
              />
            ))}
          </div>
          <div className="flex flex-row md:gap-1 ">
            {row2.map((el, i) => (
              <Miniseat
                key={i}
                name={el}
                onClick={() => seatBookingHandler(el)}
                className={SN.includes(el) && "selected"}
              />
            ))}
          </div>
          <div className="flex flex-row md:gap-1 ">
            {row3.map((el, i) => (
              <Miniseat
                key={i}
                name={el}
                onClick={() => seatBookingHandler(el)}
                className={SN.includes(el) && "selected"}
              />
            ))}
          </div>
        </div>

        <div className="down flex flex-col">
          <div className="flex flex-row md:gap-1 ">
            {row4.map((el, i) => (
              <Miniseat
                key={i}
                name={el}
                onClick={() => seatBookingHandler(el)}
                className={SN.includes(el) && "selected"}
              />
            ))}
          </div>
          <div className="flex flex-row md:gap-1 ">
            {row5.map((el, i) => (
              <Miniseat
                key={i}
                name={el}
                onClick={() => seatBookingHandler(el)}
                className={SN.includes(el) && "selected"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
