/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

import Chart from '../components/Chart';
import Layout from '../components/layout';
import QuerySelectors from '../components/QuerySelectors';

import { DATASETS, cleanData } from '../lib';

const DEFAULT_STATE = {
  data: [],
  queryParams: {
    selectedDatasets: [],
    interval: ""
  }
}
export default class IndexPage extends Component { 

  constructor(props){
    super(props);
    this.state = DEFAULT_STATE
  }

  getData = async () => {
    const {selectedDatasets, interval} = this.state.queryParams;
    if(selectedDatasets && Array.isArray(selectedDatasets)) {
     
      const requests = selectedDatasets.map(s => {
        const { route, name } = DATASETS[s];
        return {
          name,
          res: axios.get(`http://localhost:3000${route}`)
        };
      });

      const data = await requests.reduce(async (set, {name, res}) => {
        const sets = await set; // wait for previous requests to return (instantaneous)
        const {data, error} = await res; // wait for this res to load
        return error ? sets : [...sets, {name, data: data.rows}]
      }, []);

      this.setState({data});
    }
  }
  
  resetData = () => this.setState({...DEFAULT_STATE});
  
  toggleDataset = (datasetName) => {
    const { queryParams } = this.state;
    const currentSets = [...queryParams.selectedDatasets];
    const setIndex = currentSets.indexOf(datasetName);

    const selectedDatasets = setIndex > -1
      ? currentSets.filter(name => name !== datasetName)
      : [...currentSets, datasetName];

    this.setState({queryParams: {...queryParams, selectedDatasets}});
  };

  updateQuery = (update) => {
    const queryParams = {...this.state.queryParams, ...update};
    this.setState({queryParams});
  }

  
  render () {
    const { queryParams, data } = this.state
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
        
        {Object.keys(DATASETS).map((set) => 
          <React.Fragment key={set}>
            <label htmlFor={set}> {set} </label>
            <input
              type="radio"
              checked={queryParams.selectedDatasets.filter(n => n === set).length > 0}
              name={set}
              value={set}
              onClick={() => this.toggleDataset(set)}
            /> 
          </React.Fragment>)}

        {/* <QuerySelectors /> */}

        <button onClick={this.getData}> Load Data </button>
        <button onClick={this.resetData}> Reset Graph </button>

        <Chart data={data} />

      </Layout>
    );
  }
}




