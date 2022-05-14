import React, { createContext, useState } from "react";

const IpContext = createContext({});

export const IpProvider = ({ children }) => {
  const [address, setAddress] = useState();
  const [state, setState] = useState();
  const [timezone, setTimezone] = useState();
  const [isp, setIsp] = useState();
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);

  const IpInfo = {
    address,
    state,
    timezone,
    isp,
    lat,
    lng,
    setAddress,
    setState,
    setTimezone,
    setIsp,
    setLat,
    setLng,
  };

  return <IpContext.Provider value={IpInfo}>{children}</IpContext.Provider>;
};

export default IpContext;
