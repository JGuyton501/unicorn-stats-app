-- Table: public.TxGrowth

-- DROP TABLE public.TxGrowth;

CREATE TABLE TxGrowth
(
    utcdate DATE, --date utc formate
    unixtimestamp INTEGER, --unix time stamp
    value INTEGER, --value
    CONSTRAINT txgrowth_pkey PRIMARY KEY (unixtimestamp)
)
WITH (
  OIDS=FALSE
);
