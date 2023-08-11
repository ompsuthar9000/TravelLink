import React, { useState } from "react";
import "./Buscards.scss";
import { GiAlliedStar, GiMeal } from "react-icons/gi";
import { BiWifi, BiWifiOff } from "react-icons/bi";
import { MdNoMealsOuline } from "react-icons/md";
import { PiPlugChargingBold } from "react-icons/pi";
import { Context } from "../../../../../context/AppContext";
import { useContext } from "react";
import { FaBottleWater } from "react-icons/fa6";

import Seat from "../Seat/Seat";
const BusCards = ({ data, total }) => {
  const { SN, setCheckoutbar, setSelectedSeats } = useContext(Context);
  const [viewSeat, setViewSeat] = useState(false);

  const bookClickerHandler = () => {
    const ticket = {
      busid: data._id,
      SN,
      GST: (data.ticket_price * SN.length * 5) / 100,
      SubTotal: data.ticket_price * SN.length,
      GrandTotal:
        (data.ticket_price * SN.length * 5) / 100 +
        data.ticket_price * SN.length,
    };
    setSelectedSeats(ticket);
    setCheckoutbar(true);
  };
  return (
    <div>
      <div className="buscardbody flex flex-col ">
        <div className="row">
          <div className="plasehold md:p-2 ">
            <h3>From</h3>
            <p>{data.source}</p>
          </div>
          <div className="plasehold  md:p-2 p-1">
            <h3>To</h3>
            <p>{data.destination}</p>
          </div>
          <div className="plasehold  md:p-2 p-1">
            <h3>Departure</h3>
            <p>{data.departure_time}</p>
          </div>
          <div className="plasehold  md:p-2 p-1">
            <h3>Arrival</h3>
            <p>{data.arrival_time}</p>
          </div>
          <div className="md:hidden flex flex-col gap-1.5 mt-auto">
            <div className="plasehold  md:p-2 p-1 ml-1">
              <h3>Duration</h3>
              <p>{data.duration}</p>
            </div>
            <div className="plasehold  md:p-2 p-1 ml-1 ">
              <h3>Fare</h3>
              <p>
                &#8377; {data.ticket_price}
                {".0"}
              </p>
            </div>
          </div>

          <div className="plasehold  md:p-2 p-1 ml-1 sm smhide ">
            <h3>Duration</h3>
            <p>{data.duration}</p>
          </div>
          <div className="plasehold smhide md:p-2 p-1 ml-1 ">
            <h3>Fare</h3>
            <p>
              &#8377; {data.ticket_price}
              {".0"}
            </p>
          </div>
        </div>
        <div className="row row2 ">
          <div className="icons_ flex flex-row gap-3 justify-center justify-items-center ">
            {data.ac ? <p>AC</p> : <p>NonAc</p>}
            {data.sleeper ? <p>Sleeper</p> : <p>Seater</p>}
            <span className="mt-1">
              {data.wifi ? <BiWifi /> : <BiWifiOff />}
            </span>
            <span className="mt-1">
              {data.meal ? <GiMeal /> : <MdNoMealsOuline />}
            </span>
            {data.waterBottle && (
              <span className="mt-1">
                <FaBottleWater />
              </span>
            )}
            {data.chargingPoint && (
              <span className="mt-1">
                <PiPlugChargingBold />
              </span>
            )}
          </div>
          <div className="rattingdiv">
            <p>Ratings</p>
            <div
              className={`${
                data.user_rating < 5 && data.user_rating > 4
                  ? "Green"
                  : "" || (data.user_rating < 4 && data.user_rating > 3)
                  ? "Yellow"
                  : "" || data.user_rating < 3
                  ? "Red"
                  : ""
              } flex flex-row  justify-center justify-items-center items-center gap-1 retting `}
            >
              <GiAlliedStar />
              {data.user_rating}
            </div>
          </div>

          <div className="btnbook">
            <button
              onClick={() =>
                setViewSeat((prev) => {
                  if (prev === true) {
                    return false;
                  } else if (prev === false) {
                    return true;
                  }
                })
              }
            >
              {viewSeat ? "Close Seats" : "View Seats"}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full animation   flex flex-row justify-around ${
          viewSeat ? "" : "hidden animation "
        }`}
      >
        <Seat viewSeat={viewSeat} setViewSeat={setViewSeat} />

        <div className="seatLeged  ">
          <span className="white">Available</span>
          <span className="green">Selected</span>
          <span className="red">Not Available</span>
        </div>
        <div className="flex flex-col divtickets py-1">
          <div>
            <p>Selected Seats:</p>
            <span>{SN.join(",")}</span>
          </div>
          <button
            className={
              SN.length !== 0
                ? `bookbtn hover:scale-105`
                : `bookbtn opacity-50 pointer-events-none`
            }
            onClick={bookClickerHandler}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusCards;
