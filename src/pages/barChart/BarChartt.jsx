import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    Germany: 1700,
  },
  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    Germany: 1800,
  },
  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900,
  },
  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000,
  },
  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 2080,
  },
  {
    year: 2024,
    Spain: 1300,
    France: 1550,
    Germany: 1850,
  },
];

function BarChartt() {
  return (
    <div>
      <BarChart
        style={{
          margin: "2% auto",
          width: "100%",
          maxWidth: "80vw",
          maxHeight: "80vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" niceTicks="snap125" />
        <YAxis width="auto" niceTicks="snap125" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Spain" stackId="a" fill="#8884d8" />
        <Bar dataKey="France" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Germany" stackId="a" fill="#cac682" />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
}

export default BarChartt;
