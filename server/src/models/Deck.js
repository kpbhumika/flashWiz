const Model = require("./Model.js");

class Deck extends Model {
    static get tableName() {
        return "decks";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "userid", "isPublic"],
            properties: {
                id: { type: "integer" },
                title: { type: "string", minLength: 1 },
                description: { type: "string" },
                userId: { type: "integer" },
                isPublic: {
                    type: "boolean",
                    default: false  // Private by default
                },
            },
        };
    }

    static get relationMappings() {
        const { User, Flashcard } = require("./index.js");
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
        };
    }
}

module.exports = Deck;
