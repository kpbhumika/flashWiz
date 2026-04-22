/**
 * @typedef {import("knex")} Knex
 */

/** Replaced by coding-prep seed; remove only if no decks use them */
const LEGACY_ACADEMIC_NAMES = [
  "Science",
  "Mathematics",
  "History",
  "Languages",
  "Technology",
  "Arts & Humanities",
  "General Knowledge",
];

const CODING_PREP_NAMES = [
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
  for (const name of CODING_PREP_NAMES) {
    const existing = await knex("categories").where({ name }).first();
    if (!existing) {
      await knex("categories").insert({
        name,
        createdAt: knex.fn.now(),
        updatedAt: knex.fn.now(),
      });
    }
  }

  for (const name of LEGACY_ACADEMIC_NAMES) {
    const cat = await knex("categories").where({ name }).first();
    if (!cat) continue;
    const row = await knex("decks")
      .where({ categoryId: cat.id })
      .count("* as cnt")
      .first();
    if (Number(row?.cnt ?? 0) === 0) {
      await knex("categories").where({ id: cat.id }).del();
    }
  }
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  for (const name of CODING_PREP_NAMES) {
    const cat = await knex("categories").where({ name }).first();
    if (!cat) continue;
    const row = await knex("decks")
      .where({ categoryId: cat.id })
      .count("* as cnt")
      .first();
    if (Number(row?.cnt ?? 0) === 0) {
      await knex("categories").where({ id: cat.id }).del();
    }
  }
};
