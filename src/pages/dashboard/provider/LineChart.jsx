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

export default function Chart({ linechartdata }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={linechartdata}
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
