const Model = require("./Model.js");

class Flashcard extends Model {
  static get tableName() {
    return "flashcards";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["question", "answer", "deckId"],
      properties: {
        id: { type: "integer" },
        question: { type: "string", minLength: 1 },
        answer: { type: "string", minLength: 1 },
        deckId: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    const { Deck } = require("./index.js");
    return {
      deck: {
        relation: Model.BelongsToOneRelation,
        modelClass: Deck,
        join: {
          from: "flashcards.deckId",
          to: "decks.id",
        },
      },
    };
  }
}

module.exports = Flashcard;