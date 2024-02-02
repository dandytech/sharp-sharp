import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminPieChart({ data }) {
  return (
    <div>
      <p className="mt-7 font-semibold lg:mt-0">
        Monthly Service Payment (NGN){" "}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amt"
            name="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#2959f9eb"
            label
            
          />

          <Tooltip />
        </PieChart>
  
      </ResponsiveContainer>
    </div>
  );
}
