/**
 * @typedef {import("knex")} Knex
 */

/** Software development / coding interview prep categories */
const SEED_NAMES = [
  "Data Structures & Algorithms",
  "System Design",
  "OOP & Design Patterns",
  "Web Development",
  "Databases & SQL",
  "Testing, DevOps & Tooling",
  "Behavioral & Interview Prep",
];

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  for (const name of SEED_NAMES) {
    const existing = await knex("categories").where({ name }).first();
    if (!existing) {
      await knex("categories").insert({
        name,
        createdAt: knex.fn.now(),
        updatedAt: knex.fn.now(),
      });
    }
  }
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  for (const name of SEED_NAMES) {
    const cat = await knex("categories").where({ name }).first();
    if (!cat) continue;
    const row = await knex("decks")
      .where({ categoryId: cat.id })
      .count("* as cnt")
      .first();
    const cnt = Number(row?.cnt ?? 0);
    if (cnt === 0) {
      await knex("categories").where({ id: cat.id }).del();
    }
  }
};
