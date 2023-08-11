import React, { useEffect, useState, useContext } from "react";
import "./SearchPage.scss";
import LeftBar from "./LeftBar/LeftBar";
import Buscard from "./../SearchPage/buscards/BusCards";
import MobileHeder from "./../SearchPage/mobile_heder/Mobileheder";
import GrFormClose from "react-icons/gr";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import Checkoutbar from "./checkoutBar/Checkoutbar";
import { TailSpin } from "react-loader-spinner";
import { Context } from "../../../../context/AppContext";

const SearchPage = () => {
  const [DATA, setDATA] = useState([]);
  const { CheckoutBar } = useContext(Context);
  const url = window.location.href.replace(3000, 5000);
  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get(url);
      setDATA(res);
    }, 300);
  }, [url]);
  return (
    <div className="w-full h-full">
      {CheckoutBar && <Checkoutbar />}
      <div className="md:flex md:flex-row gap-4 body_search">
        <LeftBar />
        <div className="cardsbody">
          <MobileHeder Data={DATA?.data?.busroutes.length} />
          <div className="sortingheder smallhide">
            <h1 className="f">
              {`${DATA?.data?.busroutes.length || 0} Buses`}
              <span>Found</span>
            </h1>
            <div>
              <h1>Sort by:</h1>
              <ul>
                <li>time </li>
                <li>dutation</li>
                <li>Ratings</li>
                <li>Fare</li>
              </ul>
            </div>
          </div>
          {DATA.data ? (
            DATA?.data?.busroutes?.map((item, i) => (
              <Buscard data={item} key={i} />
            ))
          ) : (
            <div className="loder flex flex-col justify-center items-center">
              <TailSpin
                height="90"
                width="90"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
