import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

import { FaMoneyBillTrendUp } from "react-icons/fa6";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Amount(NGN)",
      data: [15000, 45000, 5690, 5500, 44500, 3000, 3200, 5000, 3500, 2000, 23000, 5500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function LineChart() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="bg-style flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="my-4 ml-5 w-max rounded-lg border-2 p-5">
          <FaMoneyBillTrendUp className="h-6 w-6 " />
        </div>
        <div className="px-5 text-sm">
          <Typography variant="h6" color="blue-gray">
            MONTHLY SERVICE EXPENDITURES
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize the Amount spent monthly for Your Home Services.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
