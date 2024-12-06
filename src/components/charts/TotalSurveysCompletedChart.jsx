"use client";

import { useState } from "react";
import CustomDropdown from "../dropdowns/CustomDropdown";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TotalSurveysCompletedChart = () => {
  const options = ["Days", "Weeks", "Months", "Years"];
  const [selectedOption, setSelectedOption] = useState("Months");

  const data = [
    {
      name: "Jan",
      surveys: 150,
    },
    {
      name: "Feb",
      surveys: 120,
    },
    {
      name: "Mar",
      surveys: 200,
    },
    {
      name: "Apr",
      surveys: 100,
    },
    {
      name: "May",
      surveys: 250,
    },
    {
      name: "Jun",
      surveys: 180,
    },
    {
      name: "Jul",
      surveys: 140,
    },
    {
      name: "Aug",
      surveys: 130,
    },
    {
      name: "Sep",
      surveys: 150,
    },
    {
      name: "Oct",
      surveys: 180,
    },
    {
      name: "Nov",
      surveys: 190,
    },
    {
      name: "Dec",
      surveys: 230,
    },
  ];
  return (
    <div className="rounded-[20px]  px-4 py-5 xl:px-5 xl:py-6 border border-custom-border flex flex-col gap-5">
      <div className="relative flex items-center justify-between gap-3">
        <div className="hidden lg:block"></div>
        <span className="text-xl">Total Surveys Completed</span>
        <CustomDropdown
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="w-full min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%" className="pl-0">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar
              dataKey="surveys"
              fill="#AF71FF"
              activeBar={<Rectangle fill="#9207BE" stroke="#9207BE" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSurveysCompletedChart;
