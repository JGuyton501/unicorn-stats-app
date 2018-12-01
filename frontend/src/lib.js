export const TOTAL_ADDRESSES_DATA = "Total Addresses";
export const TX_GROWTH_DATA = "TX Growth"
export const TX_FEE_DATA = "TX Fees"
export const ETH_PRICE_DATA = "ETH Price"
export const GAS_PRICE_DATA = "Gas Price"

export const DATASETS = {
  [TOTAL_ADDRESSES_DATA]: {
    label: TOTAL_ADDRESSES_DATA,
    route: "/api/addresscount",
  },
  [TX_GROWTH_DATA]: {
    label: "Transaction Growth",
    route: "/api/txgrowth",
  },
  [TX_FEE_DATA]: {
    label: "Transaction Fees",
    route: "/api/transactionfee",
  },
  [ETH_PRICE_DATA]: {
    label: ETH_PRICE_DATA,
    route: "/api/etherprice",
  },
  [GAS_PRICE_DATA]: {
    label: GAS_PRICE_DATA,
    route: "/api/avggasprice",
  },

}

export const cleanData = (datasetName, data) => {
  return DATASETS[datasetName]
    ? data.map(({ unixtimestamp, value }) => [unixtimestamp, value])
    : null;
}