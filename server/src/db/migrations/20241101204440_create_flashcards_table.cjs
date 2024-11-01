/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("flashcards", (table) => {
      table.bigIncrements("id").primary(); // Auto-incrementing primary key
      table.string("question").notNullable(); // Question cannot be null
      table.string("answer").notNullable(); // Answer cannot be null
      table.integer("deckId").unsigned().notNullable() // Foreign key reference to decks table
           .references("id").inTable("decks").onDelete("CASCADE"); // Foreign key constraint
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable(); // Timestamp for creation
      table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable(); // Timestamp for last update
    });
  };

  /**
   * @param {Knex} knex
   */
  exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("flashcards");
  };
