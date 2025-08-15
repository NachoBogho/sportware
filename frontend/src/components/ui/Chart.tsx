import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface ChartProps {
  labels: string[];
  data: number[];
  title: string;
}

const Chart: React.FC<ChartProps> = ({ labels, data, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        borderColor: 'rgba(34, 197, 94, 1)', // Dark green
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // Light green
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="bg-black p-4 rounded-lg">
      <h2 className="text-white text-lg mb-4">{title}</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;