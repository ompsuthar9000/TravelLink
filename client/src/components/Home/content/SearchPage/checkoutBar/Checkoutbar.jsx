import React, { useEffect, useState } from "react";
import "./Checkoutbar.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../../../../../context/AppContext";
import PassengerInfo from "./PassengerInfo";
import { BsPersonCircle } from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import ContectInfo from "./ContectInfo";
import axios from "axios";

const Checkoutbar = () => {
  const { setCheckoutbar, SelectedSeats, custinfo, passengerinfo } =
    useContext(Context);
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (button) {
      const obj = new Object({
        ...custinfo,
        Seats: SelectedSeats.SN,
        passengerinfo: passengerinfo,
      });
      setTimeout(async () => {
        await axios
          .post(`http://localhost:5000/ticket/createTicket`, obj)
          .then(() => setButton(false));
      }, 1000);
    }
  }, [custinfo]);

  return (
    <div className="overlayopacity">
      <div className="sidebar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setButton(true);
          }}
        >
          <div className="siderHeder flex  md: items-center">
            <IoIosArrowBack size={28} onClick={() => setCheckoutbar(false)} />
            <h1 className="uppercase font-bold text-center mx-auto md:text-xl text-lg">
              Passenger Details
            </h1>
          </div>
          <div className="mainContent ">
            <div className="flex px-3 gap-2 items-center p-3 font-medium">
              <BsPersonCircle color="green" />
              <h1>Passenger Information</h1>
            </div>
            <div>
              {SelectedSeats.SN.map((el) => (
                <PassengerInfo data={el} key={el} button={button} />
              ))}
            </div>
            <div>
              <div className="flex px-3 gap-2 items-center p-3 font-medium">
                <BiSolidMessageAltDetail color="Yellow" />
                <h1>Passenger Information</h1>
              </div>
              <div>
                <ContectInfo button={button} />
              </div>
            </div>
          </div>
          <div className="sliderbottom flex flex-col gap-4 ">
            <div className="flex flex-col gap-3">
              <div className="textright flex justify-between px-10 font-medium text-lg">
                <p>SubTotal: &#x20B9;500</p>
                <p>Tax:5%</p>
              </div>
              <div className="textcentre font-bold text-xl">
                <p>GrandTotal: &#x20B9;500</p>
              </div>
            </div>
            <button className="checkbtn" type="submit">
              Proceed to Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkoutbar;
