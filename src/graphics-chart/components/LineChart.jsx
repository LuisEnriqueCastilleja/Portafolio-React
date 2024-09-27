import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [0, 56, 28, 36, 80, 55, 90, 92, 12, 33, 77, 93];
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

var myData = {
  labels: meses,
  datasets: [
    {
      //Si quisiera agregar mas barras tipo, perdias y eso agregaria otro objeto como este completo
      //DEntro del dataset
      label: "Beneficios",
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255,99,132)",
      backgroundColor: "rgb(255,99,132, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(255,99,132)",
      pointBackgroundColor: "rgb(255,99,132)",
    },
  ],
};

var myOptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "blue" },
    },
  },
  plugins: {
    legeng: {
      display: false,
    },
  },
};

export const LineChart = () => {
  return <Line data={myData} options={myOptions} />;
};
