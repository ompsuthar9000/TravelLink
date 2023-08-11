import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [SN, setSN] = useState([]);
  const [SelectedSeats, setSelectedSeats] = useState([]);
  const [CheckoutBar, setCheckoutbar] = useState(false);
  const [finalCheckout, setFinalCheckout] = useState([]);
  const [custinfo, setCustInfo] = useState([]);
  const [passengerinfo, setPassengerinfo] = useState([]);

  return (
    <Context.Provider
      value={{
        SN,
        setSN,
        SelectedSeats,
        setSelectedSeats,
        CheckoutBar,
        setCheckoutbar,
        finalCheckout,
        setFinalCheckout,
        custinfo,
        setCustInfo,
        passengerinfo,
        setPassengerinfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
