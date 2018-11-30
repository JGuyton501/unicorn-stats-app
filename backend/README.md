# unicorn-stats-app

### How do we start this up?
1. Go to your terminal in the project folder and use `npm install` command to make sure the npm resources are installed.
2. Set up `.env` variables (DATABASE_URL) following the correct format `DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}`

**API Endpoints:**
- GET - `/api/addresscount`
- GET - `/api/avggasprice`
- GET - `/api/etherprice`
- GET - `/api/transactionfee`
- GET - `/api/txgrowth`
