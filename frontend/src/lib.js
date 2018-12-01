export const TOTAL_ADDRESSES_DATA = "Total Addresses";
export const TX_GROWTH_DATA = "TX Growth"
export const TX_FEE_DATA = "TX Fees"
export const ETH_PRICE_DATA = "ETH Price"
export const GAS_PRICE_DATA = "Gas Price"

export const DATASETS = {
  [TOTAL_ADDRESSES_DATA]: {
    name: TOTAL_ADDRESSES_DATA,
    route: "/api/addresscount",
  },
  [TX_GROWTH_DATA]: {
    name: "Transaction Growth",
    route: "/api/txgrowth",
  },
  [TX_FEE_DATA]: {
    name: "Transaction Fees",
    route: "/api/transactionfee",
  },
  [ETH_PRICE_DATA]: {
    name: ETH_PRICE_DATA,
    route: "/api/etherprice",
  },
  [GAS_PRICE_DATA]: {
    name: GAS_PRICE_DATA,
    route: "/api/avggasprice",
  },

}

export const cleanData = (data) => {
  if(Array.isArray(data) && data[0]) {
    return data.map(({ unixtimestamp, value }) => [unixtimestamp, value]);
  }

  if(data.data) return cleanData(data.data);
}

//Todo come up way to augment dataset for performance while preserving trends e.g .filter(n => n % 5 === 0) remore 80% while not compromising trends