// db.js
const { Pool } = require("pg");
const knex = require("knex");

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: process.env["POSTGRES_USER"],
  host: process.env["POSTGRES_HOST"],
  database: process.env["POSTGRES_DB"],
  password: process.env["POSTGRES_PASSWORD"],
  port: process.env["POSTGRES_PORT"],
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
