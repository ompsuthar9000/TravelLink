import React from "react";
import "./Testimonial.scss";
import CustSupport from "./../../../img/247 Customer Support.png";
import Securepriseing from "./../../../img/Secure Payment Options.png";
import OnlineBooking from "./../../../img/Easy Online Booking.png";
import Trustedopretor from "./../../../img/Trusted Bus Operators.png";
import BusOtions from "./../../../img/Wide Selection of Buses.png";
import TransPriseing from "./../../../img/Transparent Pricing.png";
function Testimonial() {
  return (
    <div className="testimonial">
      <div className="card">
        <div className="card_inside">
          <div className="small_card">
            <img src={OnlineBooking} alt="" />
            <h1>Easy Booking</h1>
            Simplify bus ticket reservations with our user-friendly platform.
          </div>

          <div className="small_card">
            <img src={BusOtions} alt="" />
            <h1>Wide Selection of Buses</h1>
            Choose from diverse buses for a comfortable journey.
          </div>

          <div className="small_card">
            <img src={TransPriseing} alt="" />
            <h1>Transparent Pricing</h1>
            No hidden fees, upfront pricing for peace of mind.
          </div>

          <div className="small_card">
            <img src={Securepriseing} alt="" />
            <h1>Secure Payment Options</h1>
            Safely make payments using trusted methods.
          </div>

          <div className="small_card">
            <img src={CustSupport} alt="" />
            <h1>24/7 Customer Support</h1>
            Round-the-clock assistance for any queries or concerns.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
