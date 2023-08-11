import React from "react";

function Mobileheder({ Data }) {
  return (
    <div className="md:hidden flex flex-row justify-between p-3 ">
      <h1 className="font-bold">
        {`${Data} Buses `}
        <span className="font-normal">Found</span>
      </h1>

      <div className="flex flex-row justify-between gap-3">
        <select className="capitalize px-2">
          <option value="0">filters</option>
        </select>
        <select className="capitalize px-2">
          <option value="0">Sort By</option>
        </select>
      </div>
    </div>
  );
}

export default Mobileheder;
