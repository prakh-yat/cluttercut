import React from 'react';
import Chart from 'react-apexcharts';

const Keyword = ({ data }) => {


  const options = {
    chart: {
      type: 'treemap',
    },
    series: [{
      data: data.map(keyword => ({ x: keyword.name, y: keyword.value }))
    }],
    plotOptions: {
        treemap: {
          distributed: true
        }
      }
  };

  return (
    <Chart options={options} series={options.series} type="treemap" height={400} />
  );
};

export default Keyword;

