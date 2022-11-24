
/* EXCHANGE HISTORY SERVICE SCHEMA */

CREATE SCHEMA exchange_history;

CREATE TABLE exchange_history.history_record
(
  "publication_date" TIMESTAMPTZ NOT NULL,
  "name" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "unit" SMALLINT NOT NULL,
  "purchase_price"  DECIMAL NOT NULL,
  "sell_price" DECIMAL NOT NULL,
  "average_price" DECIMAL NOT NULL
);

/* USER SERVICE SCHEMA */

CREATE SCHEMA exchange_users;

CREATE TABLE exchange_users.wallet
(
    "wallet_id" uuid UNIQUE DEFAULT gen_random_uuid(),
    "owner_id" TEXT UNIQUE NOT NULL,
    "pln_amount" DECIMAL NOT NULL DEFAULT 1500,
    "usd_amount" DECIMAL NOT NULL DEFAULT 0,
    "eur_amount" DECIMAL NOT NULL DEFAULT 0,
    "chf_amount" DECIMAL NOT NULL DEFAULT 0,
    "rub_amount" DECIMAL NOT NULL DEFAULT 0, 
    "czk_amount" DECIMAL NOT NULL DEFAULT 0,
    "gbp_amount" DECIMAL NOT NULL DEFAULT 0,
    PRIMARY KEY ("wallet_id")
);

