/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("users", (table) => {
      table.bigIncrements("id").primary(); // Use bigIncrements for a larger auto-incrementing ID
      table.string("username").notNullable().unique(); // Unique username
      table.string("email").notNullable().unique(); // Unique email
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    });
  };

  /**
   * @param {Knex} knex
   */
  exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("users");
  };
