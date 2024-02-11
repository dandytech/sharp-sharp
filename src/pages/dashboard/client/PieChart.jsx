import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const data = [
  { month: "January", value: 4 },
  { month: "February", value: 5 },
  { month: "March", value: 1 },
  { month: "April", value: 3 },
  { month: "May", value: 3 },
  { month: "June", value: 5 },
  { month: "July", value: 4 },
  { month: "August", value: 4 },
  { month: "September", value: 5 },
  { month: "October", value: 9 },
  { month: "November", value: 4 },
  { month: "December", value: 5 },
];

const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: data.map((item) => item.value),
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#020617",
      "#ff8f00",
      "#00897b",
      "#0eb2c1",
      "#d81b60",
      "#4b7da9",
      "#1e88e5",
      "#26c21e",
      "#114d2f",
      "#292827",
      "#490bbb",
      "#ac324a",
    ],
    legend: {
      show: false,
      labels: {
        colors: ["#000000"], // Change legend label color
      },
    },
    labels: data.map((item) => item.month),
  },
};

export default function PieChart() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="bg-style flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="my-4 ml-5 w-max rounded-lg border-2 p-5">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div className="px-5 text-sm">
          <Typography variant="h6" color="blue-gray">
            MONTHLY REQUESTS
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize Total Monthly Requests
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
