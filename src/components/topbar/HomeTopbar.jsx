"use client";

import { useState, useEffect } from "react";
import ProfileDropdown from "./ProfileDropdown";

const HomeTopbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col sm:gap-1">
        <h1 className="text-lg sm:text-[24px] sm:leading-[30px]">
          Survey Management
        </h1>
        <div className="flex items-center gap-2">
          {calendarSvg}
          <span className="text-custom-gray text-sm sm:text-[20px]">{currentDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-col hidden gap-0 sm:flex">
          <span className="tex">Anna Huang</span>
          <span className="text-custom-gray">Admin</span>
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
};

const calendarSvg = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    className="w-[18px] h-[18px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.20312 8.58901C7.89232 8.58901 7.59425 8.46555 7.37448 8.24578C7.15472 8.02601 7.03125 7.72794 7.03125 7.41714V6.24995C6.40965 6.24995 5.81351 6.49688 5.37397 6.93642C4.93443 7.37596 4.6875 7.9721 4.6875 8.5937V10.1562H20.3125V8.5937C20.3125 7.9721 20.0656 7.37596 19.626 6.93642C19.1865 6.49688 18.5904 6.24995 17.9688 6.24995V7.42183C17.9688 7.73263 17.8453 8.0307 17.6255 8.25047C17.4057 8.47024 17.1077 8.5937 16.7969 8.5937C16.4861 8.5937 16.188 8.47024 15.9682 8.25047C15.7485 8.0307 15.625 7.73263 15.625 7.42183V6.24995H9.375V7.41714C9.375 7.72794 9.25153 8.02601 9.03177 8.24578C8.812 8.46555 8.51393 8.58901 8.20312 8.58901ZM15.625 3.9062H9.375V2.7312C9.375 2.4204 9.25153 2.12233 9.03177 1.90256C8.812 1.68279 8.51393 1.55933 8.20312 1.55933C7.89232 1.55933 7.59425 1.68279 7.37448 1.90256C7.15472 2.12233 7.03125 2.4204 7.03125 2.7312V3.9062C5.78805 3.9062 4.59576 4.40006 3.71669 5.27914C2.83761 6.15822 2.34375 7.3505 2.34375 8.5937V17.9687C2.34375 19.2119 2.83761 20.4042 3.71669 21.2833C4.59576 22.1623 5.78805 22.6562 7.03125 22.6562H17.9688C19.212 22.6562 20.4042 22.1623 21.2833 21.2833C22.1624 20.4042 22.6562 19.2119 22.6562 17.9687V8.5937C22.6562 7.3505 22.1624 6.15822 21.2833 5.27914C20.4042 4.40006 19.212 3.9062 17.9688 3.9062V2.73433C17.9688 2.42353 17.8453 2.12545 17.6255 1.90569C17.4057 1.68592 17.1077 1.56245 16.7969 1.56245C16.4861 1.56245 16.188 1.68592 15.9682 1.90569C15.7485 2.12545 15.625 2.42353 15.625 2.73433V3.9062ZM4.6875 12.5V17.9687C4.6875 18.5903 4.93443 19.1864 5.37397 19.626C5.81351 20.0655 6.40965 20.3125 7.03125 20.3125H17.9688C18.5904 20.3125 19.1865 20.0655 19.626 19.626C20.0656 19.1864 20.3125 18.5903 20.3125 17.9687V12.5H4.6875Z"
      fill="#747070"
    />
  </svg>
);

export default HomeTopbar;
