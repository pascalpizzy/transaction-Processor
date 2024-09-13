// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//     return knex.schema.createTable("transactions", function (table) {
//         table.increments("id").primary().unsigned();
//         table.string("user_id");
//         table.integer("amount");
//       });
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//     return knex.schema.dropTable("transactions")
// };
