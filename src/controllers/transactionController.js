const TransactionModel = require('../models/user'); // Ensure this is correct

class TransactionController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    async calculate_balances() {
        try {
            const transactions = this.req.body.transactions;
            
            if (!Array.isArray(transactions)) {
                return this.res.status(400).json({ error: 'Invalid transactions format' });
            }

            // Insert transactions into the database
            for (const transaction of transactions) {
                await TransactionModel.insert(transaction);
            }

            // Calculate balances
            const balances = {};
            const allTransactions = await TransactionModel.findAll();

            allTransactions.forEach(({ user_id, amount }) => {
                if (!balances[user_id]) {
                    balances[user_id] = 0;
                }
                balances[user_id] += amount;
            });

            this.res.status(200).json(balances);
        } catch (error) {
            console.error("Error processing transactions:", error);
            this.res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = TransactionController;
