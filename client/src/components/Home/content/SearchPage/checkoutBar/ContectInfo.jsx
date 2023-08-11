import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../../../context/AppContext";

const ContectInfo = ({ button }) => {
  const { setCustInfo } = useContext(Context);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const EmailHandle = (el) => {
    setEmail(el.target.value);
  };
  const MobileHandler = (el) => {
    setMobile(el.target.value);
  };
  useEffect(() => {
    if (button) {
      setCustInfo(
        (prev) =>
          new Object({
            ...prev,
            ContectInfo: { Email: email, Mobile: mobile },
          })
      );
    }
  }, [button]);
  return (
    <div className=" m-3 contectinfo p-3 ">
      <h1 className="text-left mx-4 px-2 radi text-gray-700 bg-yellow-300 rounded-lg font-semibold  text-sm">
        Your ticket will be sent to these details
      </h1>
      <div className="flex flex-col px-3 gap-1">
        <label htmlFor="email" className="text-left font-bold">
          Email
        </label>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="px-3"
          onChange={EmailHandle}
        />
      </div>
      <div className="flex flex-col px-3 gap-1">
        <label htmlFor="" className="text-left font-bold ">
          Mobile
        </label>
        <input
          type="tel"
          placeholder="Mobile"
          className="px-3"
          name="Mobile"
          onChange={MobileHandler}
        />
      </div>
    </div>
  );
};

export default ContectInfo;
