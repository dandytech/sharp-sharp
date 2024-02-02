import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// LineChartComponent.js

export default function AdminAreaChart({ data }) {
  return (
    <div>
      <p className="mt-5 pb-7 lg:mt-0 font-semibold">
        <span className="text-green-500">Completed</span> Vs{" "}
        <span className="text-red-500">Cancelled</span> Services
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="completedService" stroke="green" />
          <Line type="monotone" dataKey="canceledService" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
