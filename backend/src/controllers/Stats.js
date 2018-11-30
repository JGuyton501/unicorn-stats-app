// src/controllers/Stats.js
import db from '../db/index';

const Stats = {
  /**
   * Get All Stats for addresscount
   * @param {object} req
   * @param {object} res
   * @returns {object} addresscount array
   */
  async getAllAddressCount(req, res) {
    const findAllQuery = 'SELECT * FROM addresscount';
    try {
      const { rowCount, rows } = await db.query(findAllQuery);
      return res.status(200).send({ rowCount, rows });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Stats for avggasprice
   * @param {object} req
   * @param {object} res
   * @returns {object} avggasprice array
   */
  async getAllAvgGasPrice(req, res) {
    const findAllQuery = 'SELECT * FROM avggasprice';
    try {
      const { rowCount, rows } = await db.query(findAllQuery);
      return res.status(200).send({ rowCount, rows });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Stats for etherprice
   * @param {object} req
   * @param {object} res
   * @returns {object} etherprice array
   */
  async getAllEtherPrice(req, res) {
    const findAllQuery = 'SELECT * FROM etherprice';
    try {
      const { rowCount, rows } = await db.query(findAllQuery);
      return res.status(200).send({ rowCount, rows });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Stats for transactionfee
   * @param {object} req
   * @param {object} res
   * @returns {object} transactionfee array
   */
  async getAllTransactionFee(req, res) {
    const findAllQuery = 'SELECT * FROM transactionfee';
    try {
      const { rowCount, rows } = await db.query(findAllQuery);
      return res.status(200).send({ rowCount, rows });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Stats for txgrowth
   * @param {object} req
   * @param {object} res
   * @returns {object} txgrowth array
   */
  async getAllTxGrowth(req, res) {
    const findAllQuery = 'SELECT * FROM txgrowth';
    try {
      const { rowCount, rows } = await db.query(findAllQuery);
      return res.status(200).send({ rowCount, rows });
    } catch(error) {
      return res.status(400).send(error);
    }
  }

}

export default Stats;
