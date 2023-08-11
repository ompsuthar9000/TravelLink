import React from "react";
import "./LeftBar.scss";
import { GiMeal } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { MdNoMealsOuline } from "react-icons/md";
import { PiPlugChargingBold } from "react-icons/pi"; //charging
import { FaBottleWater } from "react-icons/fa6";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="bustypes col">
        <form
          action="
        "
        >
          <h1>Bus Types</h1>
          <div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Ac {"(3)"}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">NonAc {"(3)"}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Seater {"(3)"}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Sleeper {"(3)"}</label>
            </div>
          </div>
        </form>
      </div>
      <div className="after"></div>
      <div className="AMENITIES ">
        <h1>AMENITIES</h1>
        <div>
          <div>
            <FaBottleWater />
            Water Bottle
            {`(${"2"})`}
          </div>
          <div>
            <BiWifi />
            wifi
            {`(${"2"})`}
          </div>
          <div>
            <GiMeal />
            Meal
            {`(${"2"})`}
          </div>
          <div>
            <PiPlugChargingBold />
            Charging port
            {`(${"2"})`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
