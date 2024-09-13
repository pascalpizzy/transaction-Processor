// const knex = require('../../knexfile'); // Adjust this path according to your project structure
// const { knexDb } = require('../config/database');

// class UserModel {
//     constructor() {
//         this.table = "users"; // Table name for the UserModel
//     }

//     async insert(user) {
//         try {
//             return await knexDb(this.table).insert(user);
//         } catch (error) {
//             console.error("Error inserting user:", error);
//             throw error;
//         }
//     }

//     async findAll() {
//         try {
//             return await knexDb(this.table).select('*');
//         } catch (error) {
//             console.error("Error fetching users:", error);
//             throw error;
//         }
//     }

//     async findById(userId) {
//         try {
//             return await knex(this.table).where({ id: userId }).first();
//         } catch (error) {
//             console.error("Error fetching user by ID:", error);
//             throw error;
//         }
//     }
// }

// module.exports = new UserModel();
