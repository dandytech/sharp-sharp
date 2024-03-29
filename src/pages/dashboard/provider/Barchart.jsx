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

export default function Barchart({ barchartData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={barchartData}
        margin={{
          top: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <YAxis tick={{ fill: 'blue' }} /> */}
        <YAxis />
        <Tooltip contentStyle={{ color: "black", backgroundColor: "white" }} />
        <Legend />

        <Bar dataKey="amt" stackId="a" fill="rgba(17, 59, 223, 0.828)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
