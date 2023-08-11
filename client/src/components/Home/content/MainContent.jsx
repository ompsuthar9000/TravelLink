import React, { useEffect } from "react";
import { useState } from "react";
import "./MainContent.scss";
import DatePicker from "react-datepicker";
import { MdSwapHoriz } from "react-icons/md";
import { MdSwapVerticalCircle } from "react-icons/md";
import BusIn from "./../../../img/icons8-get-on-bus-96.png";
import Busoff from "./../../../img/icons8-get-off-bus-96.png";
import "react-datepicker/dist/react-datepicker.css";
import calender from "./../../../img/schedule (1).png";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate();
  const calenderhandler = () => {
    const element = document.getElementById("etc");
    element.focus();
  };
  const [startDate, setStartDate] = useState(new Date());
  const [sourceSelect, setSouceSelect] = useState([]);
  const [DestinationSelect, setDestinationSelect] = useState([]);
  const [source, setSouce] = useState("");
  const [destination, setDestination] = useState("");
  const [data, setData] = useState({
    source: "",
    destination: "",
  });

  //handle event change
  const handleInputSourceChange = (event) => {
    setSouce(event);
  };
  const handleInputDestinationChange = (event) => {
    setDestination(event);
  };

  useEffect(() => {
    setTimeout(async () => {
      if (source.length !== 0) {
        const data = await axios.post("http://localhost:5000/busroutes/souce", {
          source: source,
        });
        if (data) {
          const element = [data.data.source].map((el) => {
            setData(
              (prev) =>
                new Object({ source: el, destination: prev.destination })
            );
            return new Object({ value: el, label: el });
          });
          setSouceSelect(element);
        }
      }
    }, 1000);
  }, [source]);

  useEffect(() => {
    setTimeout(async () => {
      if (destination.length !== 0) {
        const data = await axios.post(
          "http://localhost:5000/busroutes/destination",
          {
            destination: destination,
          }
        );
        if (data) {
          const element = [data.data.destination].map((el) => {
            setData(
              (prev) => new Object({ source: prev.source, destination: el })
            );
            return new Object({ value: el, label: el });
          });
          setDestinationSelect(element);
        }
      }
    }, 1000);
  }, [destination]);

  const navigationhandler = () => {
    if (!data.source) {
      navigate(`busroutes/Search/${data.destination}`);
    } else if (!data.destination) {
      navigate(`busroutes/Search/${data.source}`);
    } else if (data.source && data.destination) {
      navigate(`busroutes/Search/${data.source}/${data.destination}`);
    }
  };

  return (
    <div className="mainbody">
      <div className="hero ">
        <div className="search  ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="from flex flex-row gap-3 ">
              <img src={BusIn} alt="" />
              <div className="md:flex flex-col div1">
                <Select
                  placeholder="From"
                  onInputChange={handleInputSourceChange}
                  // onChange={handleChaneSourceChange}
                  value={sourceSelect}
                  options={sourceSelect}
                  className="input"
                  defaultValue={sourceSelect}
                />
              </div>
            </div>
            <div className="swap ">
              <MdSwapHoriz className="smhide" />
            </div>
            <div className="to flex flex-row gap-3">
              <img src={Busoff} alt="" />
              <div className="md:flex flex-col div1">
                <Select
                  placeholder="To"
                  onInputChange={handleInputDestinationChange}
                  // onChange={handleChangeDestinationChange}
                  value={DestinationSelect}
                  className="input"
                  options={DestinationSelect}
                  defaultValue={DestinationSelect}
                />
              </div>
            </div>
            <div
              className="Date flex flex-row cursor-pointer justify-center items-center md:gap-2"
              onClick={calenderhandler}
            >
              <img src={calender} alt="" />
              <div className="date_show flex md:flex-col div1 ">
                <h1 className="font-bold text-center">
                  {startDate.getDate()}{" "}
                  {startDate.toLocaleString("default", { month: "short" })}
                </h1>
                <h1 className="font-semibold text-gray-600">
                  {startDate.getFullYear()}
                </h1>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  id="etc"
                />
              </div>
            </div>
            <button className="uppercase button" onClick={navigationhandler}>
              Search Buses
            </button>
          </form>
          <MdSwapVerticalCircle className="md:hidden swapsm" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
