import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import IPInfo from "./IPInfo";
import IpContext from "../context/IpContext";

const Search = () => {
  const {
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
  } = useContext(IpContext);
  const ipRef = useRef();
  const [ipSearch, setIpSearch] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data1 = await axios.get(`https://api.ipify.org?format=json	`);
        const r1 = data1.data;

        const data = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_dG5ZcxM6F4A0wMgWbpLvQNogxIMbD&ipAddress=${r1.ip}`
        );
        const result = data.data;
        console.log(result);

        setAddress(result.ip);
        setState(result.location.region);
        setTimezone(result.location.timezone);
        setIsp(result.isp);
        setLat(result.location.lat);
        setLng(result.location.lng);

        setShow(true);
      } catch (err) {
        alert(err.message);
      }
    }
    fetchData();
  }, []);

  const getIpInfo = async () => {
    try {
      const data = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_dG5ZcxM6F4A0wMgWbpLvQNogxIMbD&ipAddress=${ipSearch}`
      );
      const result = data.data;
      console.log(result);

      setAddress(result.ip);
      setState(result.location.region);
      setTimezone(result.location.timezone);
      setIsp(result.isp);
      setLat(result.location.lat);
      setLng(result.location.lng);

      setShow(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="z-20 flex justify-center relative px-4 pt-8 pb-32 bg-hero-pattern bg-cover">
      {/* search input */}
      <div className="w-full max-w-screen-sm">
        <h1 className="text-backColor text-center text-3xl pb-4">
          IP Address Tracker
        </h1>
        <div className="flex">
          <input
            name="ipaddress"
            ref={ipRef}
            className="flex-1 py-3 px-2 rounded-tl-[15px] rounded-bl-[15px] focus:outline-none "
            type="text"
            placeholder="Search for any IP address or domain  "
            onChange={(e) => setIpSearch(e.target.value)}
          />
          <div
            onClick={getIpInfo}
            className="cursor-pointer hover:bg-gray-700 bg-black px-4 text-white rounded-tr-[15px] rounded-br-[15px] flex items-center fas fa-chevron-right "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* IPInfo */}
      {show && (
        <IPInfo
          address={address}
          state={state}
          timezone={timezone}
          isp={isp}
          lat={lat}
          lng={lng}
        />
      )}
    </div>
  );
};

export default Search;
