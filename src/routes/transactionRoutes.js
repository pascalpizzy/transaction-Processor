const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transactionController");



router.post("/balance", (req, res, next) => {
    console.log("this is the transaction route");
    const controller = new TransactionController(req, res, next);
    controller.calculate_balances();
})

module.exports = {router};