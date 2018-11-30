// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import Stats from './src/controllers/Stats';

dotenv.config();
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});
app.get('/api/addresscount', Stats.getAllAddressCount);
app.get('/api/avggasprice', Stats.getAllAvgGasPrice);
app.get('/api/etherprice', Stats.getAllEtherPrice);
app.get('/api/transactionfee', Stats.getAllTransactionFee);
app.get('/api/txgrowth', Stats.getAllTxGrowth);

app.listen(3000)
console.log('app running on port ', 3000);
