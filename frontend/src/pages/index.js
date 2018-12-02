import React, { Component } from 'react';
import axios from 'axios';

import Chart from '../components/Chart';
import Layout from '../components/layout';
import QuerySelectors from '../components/QuerySelectors';

import { DATASETS, parseData } from '../lib';


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
    const { selectedDatasets } = this.state.queryParams;
    if(selectedDatasets && Array.isArray(selectedDatasets)) {

      const dataReqs = Promise.all(selectedDatasets.map(s =>
        DATASETS[s] ? axios.get(`http://localhost:3000${DATASETS[s].route}`) : null));
      
      const data = await dataReqs
        .then((res) => res.map(({data, error}, i) =>
          !data || error ? {error} : {data: parseData(data.rows), name: selectedDatasets[i]}))
        .catch(error => {console.log('[ERROR] Could not retrive chart data', error)})

      this.setState({ data });
    }
  }
  
  resetData = () => this.setState({ ...DEFAULT_STATE });
  
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
    console.log('state', queryParams, data);
    return (
      <Layout>
        <h3>Turning ETH normies into ETH stat warriors!</h3>  
        <p>Now go build something great.</p>
        <img
          id="header-gif"
          src="https://media0.giphy.com/media/2wt1g9YSW8PS0/200w.webp?cid=3640f6095c01050f41627a6d7371308a"
          alt="Mr. T pitiesthe fool that don't rely on the holy unicorn oracles"
        />

        {/*  Maybe put motivational or other text inside this unicorn pic for users
        http://www.unicornsrule.com/wp-content/uploads/unicorn-quotes.jpg */}
        
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
              onChange={() => {}} // onChange doesn't work on radio buttons because they can't unselect themselves
              onClick={() => this.toggleDataset(set)} // using onClick as replacement for onChange
            /> 
          </React.Fragment>)}

        {/* <QuerySelectors /> */}
        
        <br />

        <button onClick={this.getData}> Load Data </button>
        <button onClick={this.resetData}> Reset Graph </button>

        <Chart data={data} />

      </Layout>
    );
  }
}




