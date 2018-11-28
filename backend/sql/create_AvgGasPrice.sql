-- Table: public.AvgGasPrice

-- DROP TABLE public.AvgGasPrice;

CREATE TABLE AvgGasPrice
(
    utcdate DATE, --date utc formate
    unixtimestamp INTEGER, --unix time stamp
    value BIGINT, --value
    CONSTRAINT avggasprice_pkey PRIMARY KEY (unixtimestamp)
)
WITH (
  OIDS=FALSE
);
