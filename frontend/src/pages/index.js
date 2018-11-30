import React, {Component} from 'react';
import axios from 'axios';

import Chart from '../components/Chart';

import Layout from '../components/layout'

export default class IndexPage extends Component { 

  constructor(props){
    super(props);
    this.state = {
      currentData: null,
      allData : []
    }
  }

  getEthData = async (datasetName) => {
    const datasetOptions = document.getElementById("select-dataset");
    const selectedDataset = datasetName || datasetOptions.options[datasetOptions.selectedIndex].value;
    const dataCache = this.state.allData[selectedDataset];

    console.log('get EthData', selectedDataset, dataCache);
    if(!dataCache) {
      const newData = await axios.get(`http://localhost:3000/api/addresscount`);
      console.log('newData', newData, newData.body, );
      if(!newData.error) {
        this.setState({
          currentData: newData,
          allData: {...this.state.allData, [selectedDataset]: newData}
        });
        return newData;
      }
    }

    this.setState({currentData: dataCache})
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
                
        <select id="select-dataset"> 
          <option> Tx Price </option>
          <option> Gas Costs </option>
          <option> Total Addresses </option>
        </select>

        <button onClick={this.getEthData}> Load Dataset </button>
        
        <Chart />
      </Layout>
    );
  }
}
