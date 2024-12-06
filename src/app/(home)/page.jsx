"use client";

import SurveyCard from "@/components/cards/SurveyCard";
import TotalSurveysByCategoryChart from "@/components/charts/TotalSurveysByCategoryChart";
import TotalSurveysCompletedChart from "@/components/charts/TotalSurveysCompletedChart";
import CustomDropdown from "@/components/dropdowns/CustomDropdown";
import { useState } from "react";

export default function HomePage() {
  const options = ["By Days", "By Months", "By Years"];
  const [selectedOption, setSelectedOption] = useState("By Days");
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex items-center justify-between w-full py-5 md:py-10">
        <h1 className="md:text-2xl">Completed Surveys</h1>
        <CustomDropdown
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="flex flex-col w-full gap-5 xl:gap-8">
        <div className="grid gap-5 xl:gap-8 xl:grid-cols-3">
          <SurveyCard
            icon={completedSurveysSvg}
            title="Completed Surveys"
            count={1235}
            lastMonthPercentage={7.3}
          />
          <SurveyCard
            icon={currentSurveysSvg}
            title="Current Surveys"
            count={15674}
            lastMonthPercentage={7.3}
          />
          <SurveyCard
            icon={totalUsersSvg}
            title="Total Users"
            count={12567}
            lastMonthPercentage={7.3}
          />
        </div>
        <div className="grid lg:grid-cols-[5fr_3.64fr] gap-5 xl:gap-8">
          <TotalSurveysCompletedChart />
          <TotalSurveysByCategoryChart />
        </div>
      </div>
    </div>
  );
}

const completedSurveysSvg = (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="35" height="35" rx="10" fill="#E7DFF1" />
    <g clipPath="url(#clip0_2083_533)">
      <path
        d="M11.75 10H24.25C25.216 10 26 10.784 26 11.75V24.25C26 24.7141 25.8156 25.1592 25.4874 25.4874C25.1592 25.8156 24.7141 26 24.25 26H11.75C11.2859 26 10.8408 25.8156 10.5126 25.4874C10.1844 25.1592 10 24.7141 10 24.25V11.75C10 10.784 10.784 10 11.75 10ZM11.5 11.75V24.25C11.5 24.388 11.612 24.5 11.75 24.5H24.25C24.3163 24.5 24.3799 24.4737 24.4268 24.4268C24.4737 24.3799 24.5 24.3163 24.5 24.25V11.75C24.5 11.6837 24.4737 11.6201 24.4268 11.5732C24.3799 11.5263 24.3163 11.5 24.25 11.5H11.75C11.6837 11.5 11.6201 11.5263 11.5732 11.5732C11.5263 11.6201 11.5 11.6837 11.5 11.75ZM21.75 13C21.9489 13 22.1397 13.079 22.2803 13.2197C22.421 13.3603 22.5 13.5511 22.5 13.75V21.25C22.5 21.4489 22.421 21.6397 22.2803 21.7803C22.1397 21.921 21.9489 22 21.75 22C21.5511 22 21.3603 21.921 21.2197 21.7803C21.079 21.6397 21 21.4489 21 21.25V13.75C21 13.5511 21.079 13.3603 21.2197 13.2197C21.3603 13.079 21.5511 13 21.75 13ZM13.5 13.75C13.5 13.5511 13.579 13.3603 13.7197 13.2197C13.8603 13.079 14.0511 13 14.25 13C14.4489 13 14.6397 13.079 14.7803 13.2197C14.921 13.3603 15 13.5511 15 13.75V19.25C15 19.4489 14.921 19.6397 14.7803 19.7803C14.6397 19.921 14.4489 20 14.25 20C14.0511 20 13.8603 19.921 13.7197 19.7803C13.579 19.6397 13.5 19.4489 13.5 19.25V13.75ZM18 13C18.1989 13 18.3897 13.079 18.5303 13.2197C18.671 13.3603 18.75 13.5511 18.75 13.75V17.25C18.75 17.4489 18.671 17.6397 18.5303 17.7803C18.3897 17.921 18.1989 18 18 18C17.8011 18 17.6103 17.921 17.4697 17.7803C17.329 17.6397 17.25 17.4489 17.25 17.25V13.75C17.25 13.5511 17.329 13.3603 17.4697 13.2197C17.6103 13.079 17.8011 13 18 13Z"
        fill="#9207BE"
      />
    </g>
    <defs>
      <clipPath id="clip0_2083_533">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(10 10)"
        />
      </clipPath>
    </defs>
  </svg>
);

const currentSurveysSvg = (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="35" height="35" rx="10" fill="#E7DFF1" />
    <path
      d="M17.15 8.40004L13.43 14.48C13.02 15.14 13.5 16 14.28 16H21.71C22.49 16 22.97 15.14 22.56 14.48L18.85 8.40004C18.7616 8.25368 18.6369 8.13262 18.488 8.04859C18.3391 7.96456 18.171 7.92041 18 7.92041C17.829 7.92041 17.6609 7.96456 17.512 8.04859C17.3631 8.13262 17.2384 8.25368 17.15 8.40004Z"
      fill="#9207BE"
    />
    <path
      d="M23.5 27C25.9853 27 28 24.9853 28 22.5C28 20.0147 25.9853 18 23.5 18C21.0147 18 19 20.0147 19 22.5C19 24.9853 21.0147 27 23.5 27Z"
      fill="#9207BE"
    />
    <path
      d="M10 26.5H16C16.55 26.5 17 26.05 17 25.5V19.5C17 18.95 16.55 18.5 16 18.5H10C9.45 18.5 9 18.95 9 19.5V25.5C9 26.05 9.45 26.5 10 26.5Z"
      fill="#9207BE"
    />
  </svg>
);

const totalUsersSvg = (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="35" height="35" rx="10" fill="#E7DFF1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10C12.9391 10 11.9217 10.4214 11.1716 11.1716C10.4214 11.9217 10 12.9391 10 14C10 15.0609 10.4214 16.0783 11.1716 16.8284C11.9217 17.5786 12.9391 18 14 18C15.0609 18 16.0783 17.5786 16.8284 16.8284C17.5786 16.0783 18 15.0609 18 14C18 12.9391 17.5786 11.9217 16.8284 11.1716C16.0783 10.4214 15.0609 10 14 10ZM12 19C10.9391 19 9.92172 19.4214 9.17157 20.1716C8.42143 20.9217 8 21.9391 8 23V24C8 24.5304 8.21071 25.0392 8.58579 25.4142C8.96086 25.7893 9.46957 26 10 26H18C18.5304 26 19.0391 25.7893 19.4142 25.4142C19.7893 25.0392 20 24.5304 20 24V23C20 21.9391 19.5786 20.9217 18.8284 20.1716C18.0783 19.4214 17.0609 19 16 19H12ZM19.25 16.905C19.728 16.045 20 15.055 20 14C20.0002 12.9835 19.7421 11.9835 19.25 11.094C19.8178 10.5567 20.5306 10.1976 21.3003 10.061C22.07 9.92446 22.8628 10.0164 23.5808 10.3255C24.2988 10.6346 24.9106 11.1473 25.3403 11.8003C25.7701 12.4532 25.9992 13.2178 25.9992 13.9995C25.9992 14.7812 25.7701 15.5458 25.3403 16.1988C24.9106 16.8517 24.2988 17.3644 23.5808 17.6735C22.8628 17.9826 22.07 18.0746 21.3003 17.938C20.5306 17.8014 19.8178 17.4423 19.25 16.905ZM21.466 26C21.806 25.412 22.001 24.729 22.001 24V23C22.0028 21.5238 21.4586 20.099 20.473 19H24C25.0609 19 26.0783 19.4214 26.8284 20.1716C27.5786 20.9217 28 21.9391 28 23V24C28 24.5304 27.7893 25.0392 27.4142 25.4142C27.0391 25.7893 26.5304 26 26 26H21.466Z"
      fill="#9207BE"
    />
  </svg>
);
