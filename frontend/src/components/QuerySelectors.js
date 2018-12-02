import React from 'react';
/**
 * @name - 
 * @summary - 
 * @description - 
 * @prop - 
 */
export default ({ queryParams, updateQuery }) => {
  const queries = {
    interval: {
      type: 'select',
      options: ["By Day", "By Week", "By Month"]
    },
  };

  const renderQueries = () => Object.keys(queries).map((q) => {
    const {type, options} = queries[q];
    if(type === "select") {
      return (
        <select key={q} id={`query-select-${q}-container`}>
          {options.map((val) => 
            <option
              className={`query-select-${q}`}
              key={val}
              value={val}
            >
              {val}
            </option>)}
        </select>
      );
    }

    if(type === "radio") {
      return (
        <div key={q} id={`query-select-${q}-container`}>
        {options.map((val) => 
          <React.Fragment key={val}>
            <label htmlFor={val}> {val} </label>
            <input className={`query-select-${q}`} type="radio" name={val} value={val} />
          </React.Fragment>)}
        </div> 
      );
    }
  })

  return (
    <div>
      {renderQueries()}
    </div>
  )
}