import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    amt: 2400,
  },
  {
    name: "February",
    amt: 2210,
  },
  {
    name: "March",
    amt: 2290,
  },
  {
    name: "April",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "June",
    amt: 2500,
  },
  {
    name: "July",
    amt: 2100,
  },
  {
    name: "August",
    amt: 5100,
  },
  {
    name: "September",
    amt: 8100,
  },
  {
    name: "October",
    amt: 5100,
  },
  {
    name: "November",
    amt: 1100,
  },
  {
    name: "December",
    amt: 9100,
  },
];

export default class Barchart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/mixed-bar-chart-q4hgc";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" color="bgsummary">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,

            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="amt" stackId="a" fill="rgba(6, 53, 240, 0.467)" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
