// db.js
const { Pool } = require("pg");
const knex = require("knex");

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "flashwiz",
  password: "postgres",
  port: 5432,
});

// Create a Knex instance
const knexInstance = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "flashwiz",
    port: 5432,
  },
});

// Export both the pool and the Knex instance
module.exports = { pool, knex: knexInstance };
