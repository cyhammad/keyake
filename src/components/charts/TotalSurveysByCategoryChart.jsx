"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const TotalSurveysByCategoryChart = () => {
  const data = [
    { name: "Health", value: 400 },
    { name: "IT", value: 300 },
    { name: "Fitness", value: 300 },
    { name: "Sports", value: 200 },
  ];
  const COLORS = ["#9207BE", "#AF71FF", "#C99FFF", "#9207BE52"];
  return (
    <div className="rounded-[20px]  px-4 py-5 xl:px-5 xl:py-6 border border-custom-border flex flex-col gap-5">
      <div className="relative flex items-center justify-center">
        <span className="text-xl">Total Surveys Completed</span>
      </div>

      <ResponsiveContainer className="min-h-[400px]" width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalSurveysByCategoryChart;
