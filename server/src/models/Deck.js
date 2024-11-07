const Model = require("./Model.js");

class Deck extends Model {
  static get tableName() {
    return "decks";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "userId", "isPublic", "categoryId"], // Add `categoryId` as required
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1 },
        description: { type: "string" },
        userId: { type: "integer" },
        categoryId: { type: "integer" }, // Foreign key to category
        isPublic: {
          type: "boolean",
          default: false,
        },
      },
    };
  }

  static get relationMappings() {
    const { User, Flashcard, Category } = require("./index.js");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "decks.userId",
          to: "users.id",
        },
      },
      flashcards: {
        relation: Model.HasManyRelation,
        modelClass: Flashcard,
        join: {
          from: "decks.id",
          to: "flashcards.deckId",
        },
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "decks.categoryId",
          to: "categories.id",
        },
      },
    };
  }
}

module.exports = Deck;
