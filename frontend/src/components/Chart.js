import React from 'react';
import {Line} from 'react-chartjs-2';

const mapTypeStrToComponent = (type) => 
  ({
    "line": Line,
  }[type] 
  || null);

  
/**
 * @name - 
 * @summary - 
 * @description - 
 * @prop - 
 */
export default (props) => {
  const {canvasId, data, options, height, width} = props;

  const dataset = data || {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // X axis labels
      datasets: [{
          label: '# of Votes', // label for to distibguish this dataset in the graph
          data: [12, 19, 3, 5, 2, 3],
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
      }]
  }
  
  return <Line data={dataset} id={canvasId} width={width} height={height} />;
}