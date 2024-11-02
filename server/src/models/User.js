const Model = require("./Model.js");

class User extends Model {
  static get tableName() {
    return "users";
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
          from: "users.id",
          to: "decks.userId",
        },
      },
    };
  }
}

module.exports = User;