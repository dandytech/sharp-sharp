import { PureComponent } from "react";
import {
  LineChart,
  Line,
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
    completedService: 4000,
    canceledService: 240,
    amt: 2400,
  },
  {
    name: "February",
    completedService: 3400,
    canceledService: 139,
    amt: 24210,
  },
  {
    name: "March",
    completedService: 20300,
    canceledService: 948,
    amt: 25290,
  },
  {
    name: "April",
    completedService: 27480,
    canceledService: 108,
    amt: 20600,
  },
  {
    name: "May",
    completedService: 1890,
    canceledService: 48,
    amt: 2181,
  },
  {
    name: "June",
    completedService: 23490,
    canceledService: 3890,
    amt: 2500,
  },
  {
    name: "July",
    completedService: 3490,
    canceledService: 493,
    amt: 23100,
  },
  {
    name: "August",
    completedService: 340,
    canceledService: 30,
    amt: 23400,
  },
  {
    name: "September",
    completedService: 34090,
    canceledService: 4090,
    amt: 23400,
  },
  {
    name: "October",
    completedService: 35990,
    canceledService: 40,
    amt: 13500,
  },
  {
    name: "November",
    completedService: 14890,
    canceledService: 3050,
    amt: 124100,
  },
  {
    name: "December",
    completedService: 390,
    canceledService: 160,
    amt: 22100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="completedService"
            stroke="#0a3dd6"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="canceledService" stroke="#f80314" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
