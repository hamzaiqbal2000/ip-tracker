import React from "react";

const IPInfo = ({ address, state, timezone, isp, lat, lng }) => {
  return (
    <div className=" absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-backColor gap-y-4 gap-x-12 px-8 pt-8 pb-8 rounded-[15px] mr-10 ml-10 ">
      {/* Flex item 1 */}
      <div className="flex flex-col">
        <h3 className="text-dark_gray text-xs font-semibold mb-2 uppercase">
          IP Address
        </h3>
        <span className="text-very_dark_gray text-xl font-semibold">
          {address}
        </span>
      </div>

      {/* 2 */}
      <div className="flex flex-col">
        <h3 className="text-dark_gray text-xs font-semibold mb-2 uppercase">
          Location
        </h3>
        <span className="text-very_dark_gray text-xl font-semibold">
          {state}
        </span>
      </div>
      {/* 3 */}
      <div className="flex flex-col">
        <h3 className="text-dark_gray text-xs font-semibold mb-2 uppercase">
          Timezone
        </h3>
        <span className="text-very_dark_gray text-xl font-semibold">
          {timezone}
        </span>
      </div>
      {/* 4 */}
      <div className="flex flex-col">
        <h3 className="text-dark_gray text-xs font-semibold mb-2 uppercase">
          Isp
        </h3>
        <span className="text-very_dark_gray text-2xl font-semibold">
          {isp}
        </span>
      </div>
    </div>
  );
};

export default IPInfo;
