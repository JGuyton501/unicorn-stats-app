import React, { Component } from 'react';
import axios from 'axios';

import Chart from '../components/Chart';
import Layout from '../components/layout';

import { DATASETS, cleanData } from '../lib';

export default class IndexPage extends Component { 

  constructor(props){
    super(props);
    this.state = {
      datasetName: null,
      currentData: null,
      allData : [],
      queryParams: {
        selectedDatasets: [],

      }
    }
  }

  getEthData = async () => {
    const datasetOptions = document.getElementById("select-dataset");
    const datasetName = datasetOptions.options[datasetOptions.selectedIndex].text;
    const route = DATASETS[datasetName] ? DATASETS[datasetName].route : null;

    if(route) {
      const { data, error } = await axios.get(`http://localhost:3000${route}`);
      if(!error && data) {
        const cleanedData = cleanData(datasetName, data.rows);
        this.setState({
          datasetName,
          currentData: cleanedData,
          allData: {...this.state.allData, [datasetName]: cleanedData}
        });
        return cleanedData;
      }
    }

    this.setState({ currentData: dataCache })
    return dataCache;
  }



  render () {
    return (
      <Layout>
        <h3>Turning ETH normies into ETH stat warriors!</h3>  
        <p>Now go build something great.</p>
        <img
          id="header-gif"
          src="https://media0.giphy.com/media/2wt1g9YSW8PS0/200w.webp?cid=3640f6095c01050f41627a6d7371308a"
        />
                
        <br />
        <br />
                
        {/* datasets should be radio buttons so can overlay multiple datasets  */}
        <select id="select-dataset">
          {Object.keys(DATASETS).map((set) => 
            <option key={set} value={set}> {set} </option>)}
        </select>
        
        <button onClick={this.getEthData}> Load Data </button>
        
        <Chart
          data={this.state.currentData}
          datasetName={this.state.datasetName}
        />
      </Layout>
    );
  }
}




// getData = async (queryParams) => {
//   const {datasetNames, interval} = queryParams || this.state.queryParams;

//   // instead wil be array to iter from radio buttons
//   const datasetOptions = document.getElementById("select-dataset");
//   const datasetName = datasetOptions.options[datasetOptions.selectedIndex].text;

//   const route = DATASETS[datasetName] ? DATASETS[datasetName].route : null;

//   const dataCache = this.state.allData[datasetName];

//   console.log('route', route, datasetName, DATASETS[datasetName]);
//   if(!dataCache && route) {
//     // const {data, error} = await axios.get(`http://localhost:3000/api/{addresscount}`);
//     const {data, error} = await axios.get(`http://localhost:3000${route}`);
//     if(!error && data) {
//       const cleanedData = cleanData(datasetName, data.rows);
//       this.setState({
//         datasetName,
//         currentData: cleanedData,
//         allData: {...this.state.allData, [datasetName]: cleanedData}
//       });
//       return cleanedData;
//     }
//   }

//   this.setState({currentData: dataCache})
//   return dataCache;
// }

// reset = () => this.setState({
//   currentData: null,
//   datasetName: null,
//   queryParams: null
// });

// renderQuerySelectors = () => {

// };

// updateQuery = ({field, value}) => {
//   const queryParams = {...this.state.queryParams, [field]: value}
//   this.setState({queryParams});
// }