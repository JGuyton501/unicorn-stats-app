-- Table: public.EtherPrice

-- DROP TABLE public.EtherPrice;

CREATE TABLE EtherPrice
(
    utcdate DATE, --date utc formate
    unixtimestamp INTEGER, --unix time stamp
    value REAL, --value
    CONSTRAINT etherprice_pkey PRIMARY KEY (unixtimestamp)
)
WITH (
  OIDS=FALSE
);
