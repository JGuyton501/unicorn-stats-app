-- Table: public.TransactionFee

-- DROP TABLE public.TransactionFee;

CREATE TABLE TransactionFee
(
    utcdate DATE, --date utc formate
    unixtimestamp INTEGER, --unix time stamp
    value REAL, --value
    CONSTRAINT transactionfee_pkey PRIMARY KEY (unixtimestamp)
)
WITH (
  OIDS=FALSE
);
