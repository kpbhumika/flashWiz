const Model = require("./Model.js");

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1 },
      },
    };
  }

  static get relationMappings() {
    const { Deck } = require("./index.js");

    return {
      decks: {
        relation: Model.HasManyRelation,
        modelClass: Deck,
        join: {
          from: "categories.id",
          to: "decks.categoryId",
        },
      },
    };
  }
}

module.exports = Category;
