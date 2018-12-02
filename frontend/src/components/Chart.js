import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

/**
 * @name - 
 * @summary - 
 * @description - 
 * @prop - 
 */
export default class extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.data !== this.props.data) {
      return true; // only if data has been updated then re-render graph
    }
    
    return false;
  }

  render() {
    const {
      data,
      height = 500,
      width = 1000
    } = this.props;

    const dataset = formatGraphData(data);
    return dataset.datasets ? <Line data={dataset} width={width} height={height} /> : null;
    // see link for mixed chart types with multiple datasets
    // https://www.chartjs.org/docs/latest/charts/mixed.html
  }
}

const formatGraphData = (data = []) => {
  if(Array.isArray(data) && !!data[0]) {

    const datasets = data.map((chart, i) => {
      const { data, name, chartType = "line" } = chart;
      if(chartType === "line"){
        return {
          chartType,
          label: name, // graph title label
          data: [...data]
            .splice(0, data.length / 2) // remove data points for faster rendering
            .reduce((set, [ x, y ]) => 
              [...set, { x, y }] // x: timestamp, y: value
              , []),

          // graph styling
          backgroundColor: defaultGraphStyles.backgroundColor[i],
          borderColor: defaultGraphStyles.borderColor[i],
          borderWidth: defaultGraphStyles.borderWidth,
          fill: true,
          lineTension: 0.3,
        }
      }
    });

    // Graph x axis labels
    const labels = datasets[0].data.map(o => o.x);

    return { labels, datasets };
  }

  return {};
}


const defaultGraphStyles = {
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
