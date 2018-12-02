export const TOTAL_ADDRESSES_DATA = "Total Addresses";
export const TX_GROWTH_DATA = "TX Growth"
export const TX_FEE_DATA = "TX Fees"
export const ETH_PRICE_DATA = "ETH Price"
export const GAS_PRICE_DATA = "Gas Price"

export const DATASETS = {
  [TOTAL_ADDRESSES_DATA]: {
    route: "/api/addresscount",
  },
  [TX_GROWTH_DATA]: {
    route: "/api/txgrowth",
  },
  [TX_FEE_DATA]: {
    route: "/api/transactionfee",
  },
  [ETH_PRICE_DATA]: {
    route: "/api/etherprice",
  },
  [GAS_PRICE_DATA]: {
    route: "/api/avggasprice",
  },

}

export const parseData = (data) => {
  if(data.data) return parseData(data.data);

  if(Array.isArray(data) && data[0]) {
    return data.map(({ unixtimestamp, value }) => [unixtimestamp, value]);
  }
}

//Todo augment dataset for performance while preserving trends e.g .filter(n => n % 5 === 0) remore 80% while not compromising trends