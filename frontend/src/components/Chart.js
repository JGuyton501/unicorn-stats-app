import React from 'react';
import {Line} from 'react-chartjs-2';
import {cleanData} from '../lib';

/**
 * @name - 
 * @summary - 
 * @description - 
 * @prop - 
 */
export default (props) => {
  const {
    data,
    height = 500,
    width = 1000
  } = props;

  const dataset = formatGraphData(data);

  return dataset.datasets ? <Line data={dataset} width={width} height={height} /> : null;
  // see link for mixed chart types with multiple datasets
  // https://www.chartjs.org/docs/latest/charts/mixed.html
}

const formatGraphData = (data = []) => {
if(Array.isArray(data) && data[0]) {

  // Graph title label
    const labels = cleanData(data[0].data).splice(0, 100) // remove data points for faster rendering
      .reduce((x, y) => // take timestamps as labels
        [...x, y[0]] // TODO format to human readable times
        , []);

    const datasets = data.map((chart, i) => {
      const { data, name, chartType = "line" } = chart;
      const formattedData = cleanData(data);
      if(chartType === "line"){
        return {
          chartType,
          label: name, 
          data: formattedData.splice(0, 100)
            .reduce((x, val) => 
              [...x, {x: val[0], y: val[1]}] // x: timestamp, y: value
              , []),
          backgroundColor: defaultGraphStyles.backgroundColor[i],
          borderColor: defaultGraphStyles.borderColor[i],
          borderWidth: 1
        }
      }
    });

    return { labels, datasets };
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
};
