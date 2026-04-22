// db.js
const { Pool } = require("pg");
const knex = require("knex");

function getPgConfig() {
  const nodeEnv = process.env.NODE_ENV || "development";
  const isLocalDev = ["development", "test", "e2e"].includes(nodeEnv);

  const databaseUrl =
    !isLocalDev && process.env.DATABASE_URL
      ? process.env.DATABASE_URL
      : null;

  if (databaseUrl) {
    const isLocal =
      /localhost|127\.0\.0\.1/.test(databaseUrl) ||
      /@host\.docker\.internal/.test(databaseUrl);
    const config = { connectionString: databaseUrl };
    if (!isLocal) {
      config.ssl = { rejectUnauthorized: false };
    }
    return config;
  }

  return {
    user: process.env["POSTGRES_USER"],
    host: process.env["POSTGRES_HOST"],
    database: process.env["POSTGRES_DB"],
    password: process.env["POSTGRES_PASSWORD"],
    port: process.env["POSTGRES_PORT"],
  };
}

const connection = getPgConfig();

const pool = new Pool(connection);

const knexInstance = knex({
  client: "pg",
  connection,
});

module.exports = { pool, knex: knexInstance };
