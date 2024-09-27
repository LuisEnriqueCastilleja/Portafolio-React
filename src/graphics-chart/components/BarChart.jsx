import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var myOptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    },
  },
};

var myData = {
  labels: meses,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "rgba(0, 220, 195, 0.5)",
    },
  ],
};

export const BarChart = () => {
  return <Bar data={myData} options={myOptions} />;
};
