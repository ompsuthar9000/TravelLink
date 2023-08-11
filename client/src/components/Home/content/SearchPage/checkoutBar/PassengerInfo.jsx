import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../../../../../context/AppContext";
const PassengerInfo = ({ data, button }) => {
  const { SN, setPassengerinfo } = useContext(Context);
  const index = SN.indexOf(data) + 1;
  const [age, setAge] = useState("");
  const [Gender, setGEnder] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (button) {
      setPassengerinfo((prev) => [
        ...prev,
        {
          Age: age,
          Gender: Gender,
          Name: name,
          seat: data,
        },
      ]);
    }
  }, [button]);

  return (
    <div className="pinfocard p-3">
      <h1 className="font-semibold  text-sm text-left">
        {`Passenger ${index} | Seat ${data} `}
      </h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-left text-gray-700 font-bold ">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="inputtype px-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          name={`Name_${data}`}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-left font-bold">Gender</h1>
          <div className="flex gap-2">
            <div className="flex gap-2 ">
              <label htmlFor="male" className="text-gray-700">
                Male
              </label>
              <input
                type="radio"
                value="Male"
                id="male"
                name={`Gender_${data}`}
                onChange={(e) => setGEnder(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="Female">Female</label>
              <input
                type="radio"
                value="Female"
                id="female"
                name={`Gender_${data}`}
                onChange={(e) => setGEnder(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Age" className="text-left font-bold ">
            Age
          </label>
          <input
            type="number"
            className="inputtype px-2"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            name={`Age_${data}`}
            // name="Age"
          />
        </div>
      </div>
    </div>
  );
};

export default PassengerInfo;
