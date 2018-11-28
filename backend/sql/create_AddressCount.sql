-- Table: public.AddressCount

-- DROP TABLE public.AddressCount;

CREATE TABLE AddressCount
(
    utcdate DATE, --date utc formate
    unixtimestamp INTEGER, --unix time stamp
    value INTEGER, --count of addresses
    CONSTRAINT addresscount_pkey PRIMARY KEY (unixtimestamp)
)
WITH (
  OIDS=FALSE
);
