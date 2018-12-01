import React from 'react';
import {Line} from 'react-chartjs-2';

/**
 * @name - 
 * @summary - 
 * @description - 
 * @prop - 
 */
export default (props) => {
  const {
    data,
    chartType,
    datasetName,
    ss, 
    height = 500,
    width = 1000
  } = props;

  const dataset = formatDataAndLabels(chartType || "line", data);

  console.log('datasets', dataset);
  return dataset.datasets ? <Line data={dataset} width={width} height={height} /> : null;
}

const formatDataAndLabels = (chartType, data = [], options = {}) => {
//turn data into obj with  data [] and datasetName ""
  if(data && chartType === "line") {
    return {
      // .splice(0, 100)
      // Todo come up way to delete data while preserving trends. .filter(n => n % 5 === 0) remore 80% while not compromising trends
      labels: data.splice(0, 100).reduce((x, y) => [...x, y[0]], []), // TODO format unix time to dates for labels
      datasets: [{
        label: chartType,
        data: data.splice(0, 100).reduce((x, y) => [...x, y[1]], []),
        ...options,
        ...defaultGraphStyles
      }]
    }
  }

  return {};
}


const defaultGraphStyles = {
  fill: true,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ],
  borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 1
}