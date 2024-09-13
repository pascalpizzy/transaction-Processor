const { Model } = require('objection');
const knex = require("knex");
const { config } = require("./db_config");

const env = process.env.NODE_ENV || "development";
const knexDb = knex(config[env]);

// Bind the Knex instance to Objection's Model class
Model.knex(knexDb);

module.exports = {
    knexDb
};