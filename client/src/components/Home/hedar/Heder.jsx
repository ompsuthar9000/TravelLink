import React from "react";
import { useNavigate } from "react-router-dom";
import "./Heder.scss";

function Heder() {
  return (
    <div className="heder flex flex-row md:px-40 bg-slate-700 w-full md:h-16 items-center justify-between p-3">
      <div className="centre capitalize md:font-semibold">
        <h1 className="md:text-2xl logo">TravelLink</h1>
      </div>
      <div className="right text-white">
        <select
          name="quick Acees"
          id="dropdown"
          className="w-fit px-2 py-1 bg-inherit text-center"
        >
          <option value="auth" selected>
            User
          </option>
        </select>
      </div>
    </div>
  );
}

export default Heder;
